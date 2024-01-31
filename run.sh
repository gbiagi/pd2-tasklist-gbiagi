    #!/bin/bash
    # directori del script run.sh
    SCRIPT_DIR=$( cd -- "$( /home/geanfrancobiagi/Documentos/Proyectos/Cordova/pd2-tasklist-gbiagi/run.sh -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
    # entrem a la carpeta del codi font
    cd $SCRIPT_DIR
    # engeguem el PHP server
    cordova serve

