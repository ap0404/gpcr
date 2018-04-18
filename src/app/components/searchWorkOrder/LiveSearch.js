import React, {Component} from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';

export default class LiveSearch extends Component {


    onChange = name => value =>{
        this.props.notifyParent(name,value);
    };

    clearFields = ()=> {
        setTimeout(() => this.typeahead.getInstance().clear(), 0);
    };

    render(props) {
        return (
            <div className="col-xl">
                <label className="label">{this.props.liveSearchDataTitle}</label>
                <Typeahead
                    labelKey="name"
                    bsSize="small"
                    onChange={this.onChange(this.props.liveSearchDataResponse)}
                    options={this.props.liveSearchData}
                    placeholder="None Selected"
                    // selected={(!!this.props.selectedIndex && this.props.selectedIndex !==0 && this.props.selectedIndex !== -1)? this.props.liveSearchData.slice(this.props.selectedIndex, this.props.selectedIndex + 1) :  this.props.liveSearchData.slice(0,0) }
                    ref={(typeahead) => this.typeahead = typeahead}
                />
            </div>
        );
    }
}