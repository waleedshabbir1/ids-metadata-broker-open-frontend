import React from "react";
import {
    SelectedFilters,
    DataSearch,
    MultiList
} from "@appbaseio/reactivesearch";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { propertyArray } from '../propertyArray';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { ReactiveList } from "@appbaseio/reactivesearch";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Divider } from "@material-ui/core";

import { getAllResources } from '../helpers/sparql/connectors';
import { connect } from 'react-redux';

class SearchMDMResources extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            mdmSearchValue: '',
            resources: []
        };
    }

    handleSearch = value => {
        this.setState({
            mdmSearchValue: value
        }, () => {
            window.localStorage.setItem('SearchValue', this.state.mdmSearchValue);
        });
    };

    processResourceID = id => {
        let resId;
        try {
            resId = new URL(id);
        }
        catch (_) {
            return id;
        }
        return resId.pathname.split('/').pop();
    }

    componentDidMount() {
        this.setState({
            mdmSearchValue: window.localStorage.getItem('SearchValue')
        })
        getAllResources(this.props.token).then(data => {
            this.setState({ resources: data });
        });
    }

    renderMobilityResources = ({ data }) => {
        return (
            <React.Fragment>
                {
                    data.map(resource => (
                        resource.length !== 0 ?
                            <React.Fragment>
                                <Link to={'/resources/resource?id=' + encodeURIComponent(resource.resourceID)} >
                                    <Divider />
                                    <Card key={resource.resourceID} style={{ border: 'none', boxShadow: "none" }}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="h5" component="h2">
                                                    {resource.title_en || resource.title || resource.title_de}
                                                </Typography>
                                                <Typography variant="subtitle1" gutterBottom>
                                                    {resource.description_en || resource.description || resource.description_de}
                                                </Typography>
                                                <Typography variant="body1">
                                                    {resource.publisher ? "Publisher: " + resource.publisher : ""
                                                    }
                                                </Typography>
                                                <Typography variant="body1">
                                                    {resource.sovereign ? "Sovereign: " + resource.sovereign : ""
                                                    }
                                                </Typography>
                                                <Typography variant="body2">
                                                    {resource.labelStandardLicense ? "Standard License: " + resource.labelStandardLicense.map(val => val.split("_").join(" "))
                                                        : ""
                                                    }
                                                </Typography>


                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </React.Fragment>
                            : ""
                    ))
                }
            </React.Fragment >
        );
    }

    render() {
        let tenant = process.env.REACT_APP_TENANT || 'eis';
        tenant = tenant.toLowerCase();
        let propsFromApp = this.props;
        return (
            <div className="connectors-list">
                <React.Fragment>
                    <DataSearch
                        componentId="search"
                        dataField={['title', 'title_en', 'title_de', 'description', 'description_de', 'description_en']}
                        URLParams={true}
                        queryFormat="or"
                        style={{
                            marginBottom: 20
                        }}
                         autosuggest={true}
                                  showClear={true}

                        onValueChange={
                            function (value) {
                                if (propsFromApp.location.pathname.indexOf('resources') === -1) {
                                    propsFromApp.history.push("/resources");
                                }
                            }
                        }
                        value={this.state.value}
                        onChange={this.handleSearch}

                    />
                    <SelectedFilters />
                    <Grid container>
                        {/* List of resources in the /query page */}
                        <Grid item className="conn-list" lg={9} md={9} xs={12}>
                            {(process.env.REACT_APP_USE_SPARQL === 'true') && (
                                this.renderMobilityResources({ data: this.state.resources })
                            )}
                            {(process.env.REACT_APP_USE_SPARQL === 'false') && (
                                <ReactiveList
                                    componentId="result"
                                    dataField="title.keyword"
                                    pagination={true}
                                    URLParams={true}
                                    react={{
                                        and: ["search", "Keywords", "Publishers", "Category", "SubCategory", "NutsLocation"]
                                    }}
                                    render={this.renderMobilityResources}
                                    size={10}
                                    style={{
                                        marginTop: 20
                                    }}
                                />
                            )}
                        </Grid>
                        {/* Filter section on the right-side of /query page */}
                        <Grid item lg={3} md={3} xs={12}>
                            <Card>
                                <React.Fragment>
                                    <Divider />
                                    <MultiList
                                        componentId="Keywords"
                                        dataField="keyword.keyword"
                                        style={{
                                            margin: 20
                                        }}
                                        title="Keyword"
                                        URLParams={true}
                                    />
                                    <Divider />
                                    <MultiList
                                        componentId="Publishers"
                                        dataField="publisher.keyword"
                                        style={{
                                            margin: 20
                                        }}
                                        title="Publisher"
                                        URLParams={true}
                                    />
                                    <Divider />
                                    <MultiList
                                        componentId="Category"
                                        dataField="mobids:DataCategory.keyword"
                                        style={{
                                            margin: 20
                                        }}
                                        title="MobiDS Category"
                                        URLParams={true}
                                    />

                                    <Divider />
                                    <MultiList
                                        componentId="SubCategory"
                                        dataField="mobids:DataCategoryDetail.keyword"
                                        style={{
                                            margin: 20
                                        }}
                                        title="MobiDS Category Details"
                                        URLParams={true}
                                    />
                                    <Divider />

                                    <MultiList
                                        componentId="NutsLocation"
                                        dataField="mobids:nutsLocation.keyword"
                                        style={{
                                            margin: 20
                                        }}
                                        title="NUTS Code"
                                        URLParams={true}
                                    />



                                </React.Fragment>
                            </Card>
                        </Grid>
                    </Grid>
                </React.Fragment>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    token: state.auth.token
})

export default connect(mapStateToProps)(SearchMDMResources)