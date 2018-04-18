import React, {Component} from 'react';
import LiveSearch from "../searchWorkOrder/LiveSearch";
import axios from 'axios';
let sponsorData={}, sponsorId;
class SponsorList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liveSponsorSearchData : [],
            sponsorList : [],
            selected: [],
            // selectedSponsorIndex : 0
        };
        this.notifyParent = this.notifyParent.bind(this);
    }

    notifyParent = function(name, selectedField){
        if(selectedField.length === 0){
            sponsorId = '';
          //  this.refs.SponsorList.clearFields();
        } else {
            for(let i=0;i<this.state.liveSponsorSearchData.length;i++){
                if(selectedField[0]===this.state.liveSponsorSearchData[i].name) {
                    sponsorData.id = this.state.liveSponsorSearchData[i].id;
                    sponsorData.name = selectedField[0];
                    sponsorData.ticked = true;
                }
            }
        }
        this.props.getSelectedSponsorData(sponsorData);
    };
    componentDidMount(){
        axios.get('http://localhost:8081/gclportal/api/getallsponsors')
            .then((res)=> {
                console.log(res.data);
                let sponsorList = [];
                for(let i=0;i<res.data.length;i++) {
                    sponsorList.push(res.data[i].name);
                }
                this.setState({
                    liveSponsorSearchData : res.data,
                    sponsorList
                });

            }, (err) => {
                console.log(err);
            });
    }

    // componentWillReceiveProps(newProps) {
    //     if(!!this.props.selectedCriteriaData && !!newProps.selectedCriteriaData &&this.props.selectedCriteriaData!== newProps.selectedCriteriaData){
    //         this.state.selectedSponsorIndex = this.state.sponsorList.indexOf(JSON.parse(newProps.selectedCriteriaData.CLIENT)[0].name);
    //         this.props.getSelectedSponsorData(JSON.parse(newProps.selectedCriteriaData.CLIENT)[0]);
    //     }
    // }

   render() {
         return (
             <div className="form-inline">
                 <label className="col-sm-4 col-form-label" style={styles.label}>Sponsor</label>
                 <div className="col-sm-5">
                     <LiveSearch
                         ref="SponsorList"
                         // selectedIndex={this.state.selectedSponsorIndex}
                         liveSearchData={this.state.sponsorList}
                         notifyParent={this.notifyParent} liveSearchDataResponse="sponsor" selected={this.state.selected}/>
                 </div>
             </div>
         )
   }
}

const styles = ({
    label: {
        justifyContent: 'flex-start'
    }
});
export default SponsorList;