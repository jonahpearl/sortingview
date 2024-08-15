let offset = 0 // so that we change which is the 0th unit
let stride = 1
let num: number | undefined = undefined // so that we change the periodicity

export const getUnitColor = (unitId: any) => {
    if (num === undefined) num = colors.length
    const i = (offset + unitId * stride) % num
    return colors[i]
}

export const redistributeUnitColors = () => {
    if (num === undefined) num = colors.length
    offset += 1 // so that we change which is the 0th unit
    num -= 1 // so that we change the periodicity
    if (num < colors.length - 6) {
        num = colors.length // but don't let it get too low
    }
    while (true) {
        stride += 1
        if (isRelativelyPrime(stride, num)) {
            break
        }
    }
}

const isRelativelyPrime = (a: number, b: number) => {
    for (let i = 2; i <= a; i++) {
        if ((a % i === 0) && (b % i === 0)) {
            return false
        }
    }
    return true
}

// Generated by Alessio using distinctipy
const colors: string[] = [
    '#00ff00',
    '#ff00ff',
    '#0080ff',
    '#ff8000',
    '#80bf80',
    '#470ba7',
    '#c80b32',
    '#fd7ee5',
    '#027d30',
    // '#f0fd23',
    '#00ffff',
    '#00ff80',
    '#9c5a86',
    '#808000',
    '#8ed7fa',
    '#80ff00',
    '#6e52ff',
    '#0000ff',
    '#119c9b',
    '#feb982',
    '#56333d',
    '#fb2b97',
    '#8000ff',
    '#c3f1a2',
    '#b3bd25',
    '#45bc2d',
    '#1c4b88',
    '#49f3c0',
    '#a90c9c',
    '#c436ea',
    '#13055b',
    '#7f93d0',
    '#c4552d',
    '#ee7381',
    '#800000',
    '#58fe60',
    '#4f825e',
    '#21bde8',
    '#d7b8e0',
    '#1e40ee',
    '#324a01',
    '#fc2b03',
    '#723cb9',
    '#3a6ac1',
    '#aef14e',
    '#14c568',
    '#bd9c9b',
    '#f9c506',
    '#b579fa',
    // '#ffff80',
    '#810e5e',
    '#b38d4d',
    '#854810',
    '#02ea3a',
    '#0b3b3c',
    '#f90161',
    '#07c304',
    '#fe4c54',
    '#be02ea',
    '#0521bb',
    '#338b05',
    '#4989ff',
    '#52b8b3',
    '#be3271',
    '#f1a441',
    '#0b776b',
    '#0ccfac',
    '#cd61bd',
    '#85fc95',
    '#fe43fe',
    '#bd810d',
    '#cce9e6',
    '#644179',
    '#fedfbe',
    '#80bd00',
    '#99c4bd',
    '#48e5fa',
    '#400626',
    '#bcfc01',
    '#866b3f',
    '#5422e9',
    '#ea03bd',
    '#69809a',
    '#bfca76',
    '#40e60e',
    '#f1da52',
    '#3d5f3b',
    '#63b3f8',
    '#7cd83d',
    '#b52f02',
    '#9364ca',
    '#80a740',
    '#3ce183',
    '#a6a9f6',
    '#fba2bb',
    '#e3763f',
    '#ae3cae',
    '#91414a',
    '#1e94cf',
    '#06f6c9'
]

export const unitToGrayColorMap = {
   '#00ff00': '#a7a7a7',
    '#ff00ff': '#b9b9b9',
    '#0080ff': '#b9b9b9',
    '#ff8000': '#a6a6a6',
    '#80bf80': '#9f9f9f',
    '#470ba7': '#cacaca',
    '#c80b32': '#c3c3c3',
    '#fd7ee5': '#9a9a9a',
    '#027d30': '#c0c0c0',
    '#00ffff': '#989898',
    '#00ff80': '#a0a0a0',
    '#9c5a86': '#b6b6b6',
    '#808000': '#b6b6b6',
    '#8ed7fa': '#8f8f8f',
    '#80ff00': '#949494',
    '#6e52ff': '#b7b7b7',
    '#0000ff': '#d0d0d0',
    '#119c9b': '#b6b6b6',
    '#feb982': '#8e8e8e',
    '#56333d': '#c5c5c5',
    '#fb2b97': '#b5b5b5',
    '#8000ff': '#c4c4c4',
    '#c3f1a2': '#858585',
    '#b3bd25': '#9d9d9d',
    '#45bc2d': '#aeaeae',
    '#1c4b88': '#c4c4c4',
    '#49f3c0': '#959595',
    '#a90c9c': '#c2c2c2',
    '#c436ea': '#b5b5b5',
    '#13055b': '#d3d3d3',
    '#7f93d0': '#a8a8a8',
    '#c4552d': '#b6b6b6',
    '#ee7381': '#a5a5a5',
    '#800000': '#cdcdcd',
    '#58fe60': '#959595',
    '#4f825e': '#b7b7b7',
    '#21bde8': '#a8a8a8',
    '#d7b8e0': '#8f8f8f',
    '#1e40ee': '#c2c2c2',
    '#324a01': '#c7c7c7',
    '#fc2b03': '#bababa',
    '#723cb9': '#bdbdbd',
    '#3a6ac1': '#bababa',
    '#aef14e': '#8d8d8d',
    '#14c568': '#afafaf',
    '#bd9c9b': '#9f9f9f',
    '#f9c506': '#929292',
    '#b579fa': '#a5a5a5',
    '#810e5e': '#c7c7c7',
    '#b38d4d': '#a9a9a9',
    '#854810': '#bfbfbf',
    '#02ea3a': '#a9a9a9',
    '#0b3b3c': '#cbcbcb',
    '#f90161': '#bebebe',
    '#07c304': '#b5b5b5',
    '#fe4c54': '#b1b1b1',
    '#be02ea': '#bfbfbf',
    '#0521bb': '#cccccc',
    '#338b05': '#bbbbbb',
    '#4989ff': '#b0b0b0',
    '#52b8b3': '#a5a5a5',
    '#be3271': '#bbbbbb',
    '#f1a441': '#9a9a9a',
    '#0b776b': '#bfbfbf',
    '#0ccfac': '#a9a9a9',
    '#cd61bd': '#acacac',
    '#85fc95': '#8b8b8b',
    '#fe43fe': '#aaaaaa',
    '#bd810d': '#afafaf',
    '#cce9e6': '#828282',
    '#644179': '#c0c0c0',
    '#fedfbe': '#7f7f7f',
    '#80bd00': '#a7a7a7',
    '#99c4bd': '#979797',
    '#48e5fa': '#969696',
    '#400626': '#d0d0d0',
    '#bcfc01': '#8c8c8c',
    '#866b3f': '#b7b7b7',
    '#5422e9': '#c3c3c3',
    '#ea03bd': '#bcbcbc',
    '#69809a': '#b3b3b3',
    '#bfca76': '#939393',
    '#40e60e': '#a4a4a4',
    '#f1da52': '#898989',
    '#3d5f3b': '#c0c0c0',
    '#63b3f8': '#a0a0a0',
    '#7cd83d': '#9c9c9c',
    '#b52f02': '#c0c0c0',
    '#9364ca': '#b3b3b3',
    '#80a740': '#aaaaaa',
    '#3ce183': '#9f9f9f',
    '#a6a9f6': '#999999',
    '#fba2bb': '#929292',
    '#e3763f': '#aaaaaa',
    '#ae3cae': '#b8b8b8',
    '#91414a': '#bdbdbd',
    '#1e94cf': '#b4b4b4',
    '#06f6c9': '#9d9d9d',
}