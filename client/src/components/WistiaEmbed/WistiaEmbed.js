import React, {Component} from 'react';

class WistiaEmbed extends Component {
    constructor(props) {
        super(props);
        const {hashedId, ...embedOptions} = {...this.props};
        window._wq = window._wq || [];
        window._wq.push({
            id: hashedId,
            options: embedOptions,
            onHasData: (video) => {
                this.handle = video;
            }
        });
    }

    render() {
        return (
            <div className="wistia_responsive_padding" style={{ position: 'relative', width:'100%', boxSizing:'border-box'}}>
                <div className="wistia_responsive_wrapper"
                     style={{height: '100%', left: '0', position: 'absolute', top: '0', width: '100%'}}>
                    <div className={`wistia_embed wistia_async_${this.props.hashedId} videoFoam=true`}
                         style={{height: '100%', width: '100%'}}>&nbsp;</div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        if (!document.getElementById("wistia_script")) {
            const wistiaScript = document.createElement("script");
            wistiaScript.id = "wistia_script";
            wistiaScript.type = "text/javascript";
            wistiaScript.src = "https://fast.wistia.com/assets/external/E-v1.js";
            wistiaScript.async = true;
            document.body.appendChild(wistiaScript);
        }

    }

    componentWillUnmount() {
        this.handle && this.handle.remove();
    }
}

export default WistiaEmbed