npm i typescript ts-node

ts-node allows us to run ts files without having to run the complied version manually

npx ts-node <path of file>

Map section

using parcel-bundler to compile ts to js for the browser

need to use npx to use parcel because it is not globally installed

files that export classes should be have uppercase first letter

type definition files maybe required for some imports

some packages require you to install an @types/{packagename}
in order for the package to work with ts

default exports are discouraged in the TS community

use definition files to learn how to invoke required methods such as what info is required in options for google maps

implement key work force class to implement types of the interface specified

Sorting section

    tsc --init creates a tsconfig.json, allows you to configure the ts complier

    inside of tsconfig.json change root dir to the src dir
    and out dir is the build dir

    now you can use tsc in the dir that has the tsconfig.json and that will compile all of the ts and put the result inside of the
    outdir
