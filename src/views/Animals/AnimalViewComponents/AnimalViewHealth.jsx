import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from '@material-ui/core/Input';
import MenuItem from "@material-ui/core/MenuItem";
import GridContainer from "components/Grid/GridContainer.jsx";


import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";


class AnimalViewHealth extends React.Component {
    render(){
        const { classes } = this.props;


        const customStyle = {
            titleStyle: {
                padding: "10% 0px 0px 0px"
            },
            detailsContainerStyle: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            gridStyle: {
                // margin: "40px 40px",
                borderTop: "1px solid lightgray",

            },
            adoptionStyle: {
                paddingTop: "3%",

                display: "flex",
                flexWrap: 'wrap',
            },
            formControlStyle: {
                width: "43%",
                paddingTop: "3%",
                paddingBottom:"10%"
            },
            inputLabelStyle :{
                width:"130%"
            },
            healthTextStyle:{
                width:"72%"
            }

        }

        return (
            <GridItem xs={12} sm={12} md={12} style={customStyle.gridStyle}>
            <div style={customStyle.titleStyle}>
              <legend>Health and Personality</legend>
            </div>

            <GridContainer style={customStyle.detailsContainerStyle}>

                <form
                  className={classes.root}
                  autoComplete="off" style={customStyle.adoptionStyle}
                >
                    <GridItem xs={12} sm={12} md={12}>
                  <TextField style={customStyle.healthTextStyle}
                    success={this.props.textState.healthState === "success"}
                    error={this.props.textState.healthState === "error"}
                    name="health"
                    label="Health"
                    multiline
                    className={classes.textField}
                    value={this.props.animal_meta.health}
                    onChange={this.props.handleMetaTextField(10)}
                    margin="normal"
                    InputProps={{
                      readOnly: this.props.isEditing ? false : true,
                    }}
                  />
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                  <FormControl style={customStyle.formControlStyle} className={classes.formControl} >
                    <InputLabel style={customStyle.inputLabelStyle} htmlFor='is_vaccinated'>Vaccinated?</InputLabel>
                    <Select
                      disabled={this.props.isEditing ? false : true}
                      value={this.props.animal_meta.is_vaccinated ? 'Yes' : 'No'}
                      name='is_vaccinated'
                      onChange={this.props.handleAdoption}
                      renderValue={value => `${value}`}
                      input={<Input id="is_vaccinated" />}
                    >

                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>

                    </Select>
                  </FormControl>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                  <FormControl style={customStyle.formControlStyle} className={classes.formControl} >
                    <InputLabel style={customStyle.inputLabelStyle} htmlFor='is_house_trained'>House trained?</InputLabel>
                    <Select
                      disabled={this.props.isEditing ? false : true}
                      value={this.props.animal_meta.is_house_trained ? 'Yes' : 'No'}
                      name='is_house_trained'
                      onChange={this.props.handleAdoption}
                      renderValue={value => `${value}`}
                      input={<Input id="is_house_trained" />}
                    >

                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>

                    </Select>
                  </FormControl>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                  <FormControl style={customStyle.formControlStyle} className={classes.formControl} >
                    <InputLabel style={customStyle.inputLabelStyle} htmlFor='is_good_with_kids'>Good with Kids?</InputLabel>
                    <Select
                      disabled={this.props.isEditing ? false : true}
                      value={this.props.animal_meta.is_good_with_kids ? 'Yes' : 'No'}
                      name='is_good_with_kids'
                      onChange={this.props.handleAdoption}
                      renderValue={value => `${value}`}
                      input={<Input id="is_good_with_kids" />}
                    >

                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>

                    </Select>
                  </FormControl>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                  <FormControl style={customStyle.formControlStyle} className={classes.formControl} >
                    <InputLabel style={customStyle.inputLabelStyle} htmlFor='is_good_with_cats'>Good with Cats?</InputLabel>
                    <Select
                      disabled={this.props.isEditing ? false : true}
                      value={this.props.animal_meta.is_good_with_cats ? 'Yes' : 'No'}
                      name='is_good_with_cats'
                      onChange={this.props.handleAdoption}
                      renderValue={value => `${value}`}
                      input={<Input id="is_good_with_cats" />}
                    >

                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>

                    </Select>
                  </FormControl>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                  <FormControl style={customStyle.formControlStyle} className={classes.formControl} >
                    <InputLabel style={customStyle.inputLabelStyle} htmlFor='is_good_with_dogs'>Good with Dogs?</InputLabel>
                    <Select
                      disabled={this.props.isEditing ? false : true}
                      value={this.props.animal_meta.is_good_with_dogs ? 'Yes' : 'No'}
                      name='is_good_with_dogs'
                      onChange={this.props.handleAdoption}
                      renderValue={value => `${value}`}
                      input={<Input id="is_good_with_dogs" />}
                    >

                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>

                    </Select>
                  </FormControl>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={6}>
                  <FormControl style={customStyle.formControlStyle} className={classes.formControl} >
                    <InputLabel style={customStyle.inputLabelStyle} htmlFor='is_neutered_spayed'>Neutered/Spayed?</InputLabel>
                    <Select
                      disabled={this.props.isEditing ? false : true}
                      value={this.props.animal_meta.is_neutered_spayed ? 'Yes' : 'No'}
                      name='is_neutered_spayed'
                      onChange={this.props.handleAdoption}
                      renderValue={value => `${value}`}
                      input={<Input id="is_neutered_spayed" />}
                    >

                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>

                    </Select>
                  </FormControl>
                  </GridItem>


                  <GridItem xs={12} sm={12} md={6}>
                  <FormControl style={customStyle.formControlStyle} className={classes.formControl} >
                    <InputLabel style={customStyle.inputLabelStyle} htmlFor='is_mixed'>Is Mixed?</InputLabel>
                    <Select
                      disabled={this.props.isEditing ? false : true}
                      value={this.props.animal_meta.is_mixed ? 'Yes' : 'No'}
                      name='is_mixed'
                      onChange={this.props.handleAdoption}
                      renderValue={value => `${value}`}
                      input={<Input id="is_mixed" />}
                    >

                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>

                    </Select>
                  </FormControl>
                  </GridItem>

                </form>
            </GridContainer>

          </GridItem>
        )
    }
}

AnimalViewHealth.propTypes = {
    classes: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        locations: state.animalReducer.dropdownAnimalOptions.locations,
        breeds: state.animalReducer.dropdownAnimalOptions.breeds,
        size: state.animalReducer.dropdownAnimalOptions.size,
        coat_length: state.animalReducer.dropdownAnimalOptions.coat_length,
        ages: state.animalReducer.dropdownAnimalOptions.ages,
        animal_status: state.animalReducer.dropdownAnimalOptions.animal_status,
        species: state.animalReducer.dropdownAnimalOptions.species,
    }
}

export default connect(
    mapStateToProps, null
)(withStyles(regularFormsStyle)(AnimalViewHealth)) 