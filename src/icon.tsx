import * as React from 'react'
import octicons from './index'

const defaultProps: IconOptions = {
    version: '1.1',
    class: [],
    "aria-hidden": false,
    'aria-label': 'icon'
}

type Props = {
    name: optionalIcons
} & IconOptions


const Octicon: React.SFC<Props> = ({
    name, // required
    width, height, // optional
    version, viewbox,
    class: classNames,
    'aria-hidden': ariainVisible,
    'aria-label': ariaLabel
}) => {
    const w = width || octicons[name].width
    const h = height || octicons[name].width
    const vbox = viewbox || [0, 0, w, h]
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        version={version}
        width={w}
        height={h}
        viewBox={vbox.join(' ')}
        className={'octicon' + ' ' + 'octicon-' + 'name' + ' ' + classNames.join(' ')}
        aria-hidden={ariainVisible}
        aria-label={ariaLabel}
    >
        <path fillRule="evenodd" d={octicons[name].path} />
    </svg>)
}

const withDefaultProps = <P extends object, DP extends Partial<P> = Partial<P>> (
    defaultProps: DP, component: React.ComponentType<P>
) => {
    type RequiredProps = Pick<P, Exclude<keyof P, keyof DP>>
    type Props = Partial<DP> & Required<RequiredProps>
    component.defaultProps = defaultProps

    return (component as React.ComponentType<any>) as React.ComponentType<Props>
}

export default withDefaultProps(defaultProps, Octicon)
