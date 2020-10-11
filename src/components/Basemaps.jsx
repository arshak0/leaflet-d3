import React from 'react';

class Basemap extends React.Component {
    onChange = (e) => {
        var bm = e.currentTarget.value;

        if(this.props.onChange) {
            this.props.onChange(bm)
        }
    }

    render() {
        return (
            <div className="basemaps-container">
                <select value={this.props.basemap} onChange={this.onChange}>
                    <option className="card_option" value="osm">OSM</option>
                    <option className="card_option" value="hot">OSM HOT</option>
                    <option className="card_option" value="dark">DARK</option>
                </select>
            </div>
        );
    }
};

export default Basemap;