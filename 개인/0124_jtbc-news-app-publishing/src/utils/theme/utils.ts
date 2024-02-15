import { type SerializedStyles, css } from '@emotion/react'
import { theme } from '@/utils/theme'

type MarginObjectParameter = {
    x?: number
    y?: number
    bottom?: number
    top?: number
    left?: number
    right?: number
}

function margin(props: MarginObjectParameter): SerializedStyles
function margin(...args: number[]): SerializedStyles

export function margin(topOrObject: number | MarginObjectParameter, ...args: number[]) {

    if ( args.length > 4 ) {
        throw Error('`margin`함수의 매개변수를 4개를 초과할 수 없습니다.')
    }

    if ( args.length === 1 ) {
        return css`
            margin: ${args[0]};
        `
    }

    if (  ) {

    }

}
