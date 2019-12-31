PATH_UIKITS=$(cd `dirname $0`; pwd)
#set -x

file_global_components="$PATH_UIKITS/components.js"
file_global_annotations="$PATH_UIKITS/annotations.js"
echo "//auto create components.js" > $file_global_components
echo "//auto create annotations.js" > $file_global_annotations
for name in `ls $PATH_UIKITS`; do
    name=${name%/*}
    if [ -d "$PATH_UIKITS/$name/packages" ]; then
        # `scan_kit $PATH_UIKITS/$name`
        echo "import _${name//-/_} from './$name/packages/components';" >> $file_global_components
        echo "import _${name//-/_} from './$name/packages/annotations';" >> $file_global_annotations
    fi
done

echo "export default {" >> $file_global_components
echo "export default {" >> $file_global_annotations

scan_kit() {
    jm_components_dir="$1/packages"
    jm_comp_annotationsjs="$1/packages/annotations.js"
    jm_comp_componentsjs="$1/packages/components.js"
    echo "//auto create components.js" > $jm_comp_componentsjs
    echo "//auto create annotations.js" > $jm_comp_annotationsjs
    for comp in `ls $jm_components_dir`; do
        comp=${comp%/*}
        file_name="$jm_components_dir/$comp/default.vue"
        if [ -f $file_name ]; then
            echo "import ${comp//-/_} from './$comp/default';" >> $jm_comp_componentsjs
        fi
        file_name="$jm_components_dir/$comp/annotation.js"
        if [ -f $file_name ]; then
            echo "import ${comp//-/_} from './$comp/annotation';" >> $jm_comp_annotationsjs
        fi
    done
    # reset install.js
    echo "export default {" >> $jm_comp_componentsjs
    echo "export default {" >> $jm_comp_annotationsjs

    for comp in `ls $jm_components_dir`; do
        comp=${comp%/*}
        file_name="$jm_components_dir/$comp/default.vue"
        if [ -f $file_name ]; then
            echo "  '$comp': ${comp//-/_}," >> $jm_comp_componentsjs
        fi
        file_name="$jm_components_dir/$comp/annotation.js"
        if [ -f $file_name ]; then
            echo "  '$comp': ${comp//-/_}," >> $jm_comp_annotationsjs
        fi
    done

    echo "}" >> $jm_comp_componentsjs
    echo "}" >> $jm_comp_annotationsjs
}

for name in `ls $PATH_UIKITS`; do
    name=${name%/*}
    if [ -d "$PATH_UIKITS/$name/packages" ]; then
        `scan_kit $PATH_UIKITS/$name`
        echo "  $name:  _${name//-/_}," >> $file_global_components
        echo "  $name:  _${name//-/_}," >> $file_global_annotations
    fi
done

echo "}" >> $file_global_components
echo "}" >> $file_global_annotations

exit 0
