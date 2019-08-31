import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from 'axios';


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ImageUploadEdit from '../../../components/ImageUpload/ImageUploadEdit'
import GridListTileBar from '@material-ui/core/GridListTileBar';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from '@material-ui/core/Input';
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import GridContainer from "components/Grid/GridContainer.jsx";
import placeholderImage from 'assets/img/image_placeholder.jpg'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";
import { Grid, Hidden } from '@material-ui/core';

class AnimalViewTop extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
               placeholderImages: []
        }
    }

    componentDidMount = async () => {

       let images = [];
        await axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/api/animals/${this.props.paramsId}/pictures`)
            .then(res => {
                images = res.data;
                console.log(res);
                console.log('action: delete animal pictures success from action', res.data)
        })
        
        console.log(images);

        for (let i = 6 - (6 - images.length); i < 6; i++){
            images.push('');
        } 

        this.setState({
            placeholderImages: images
        })
        this.callback.bind(this);
        this.deletePicture.bind(this);
    }

   

    // deletePicture =  (event, imageId) => {

    //     event.preventDefault()

 
    //     const arrayAfterDelete = this.state.placeholderImages.map(image => image.img_id === imageId ? '' : image)

    //     console.log('animal view: array after delete ',arrayAfterDelete)
    
    //      this.setState({
    //       placeholderImages: arrayAfterDelete
    //     })
    
    //     axios
    //     .delete(`${process.env.REACT_APP_BACKEND_URL}/api/animals/pictures/${imageId}`)
    //     .then(async res => await axios
    //     .get(`${process.env.REACT_APP_BACKEND_URL}/api/animals/${this.props.animal_id}/pictures`))
    //     .then(async res => {

    //         let images = res.data;

    //         for (let i = 6 - (6 - images.length); i < 6; i++){
    //             images.push('');
    //         } 
    
    //         await this.setState({
    //             placeholderImages: images
    //           })
    //         console.log(res);
    //    console.log('action: delete animal pictures success from action', res.data)
    // })
    // .catch(err => {
    //    console.log('action:  delete animal pictures error from action: ', err.response)
    // })
   
        
    // }

    //my way

    deletePicture =  (event, imageId) => {

        event.preventDefault()

 
        const arrayAfterDelete = this.state.placeholderImages.map(image => image.img_id === imageId ? '' : image)

        console.log('animal view: array after delete ',arrayAfterDelete)
    
         this.setState({
          placeholderImages: arrayAfterDelete
        })
    
        axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/api/animals/pictures/${imageId}`)
        .then(async res => {
            await this.setState({
                            placeholderImages: arrayAfterDelete
                          })
        })
    //     .then(async res => await axios
    //     .get(`${process.env.REACT_APP_BACKEND_URL}/api/animals/${this.props.animal_id}/pictures`))
    //     .then(async res => {

    //         let images = res.data;

    //         for (let i = 6 - (6 - images.length); i < 6; i++){
    //             images.push('');
    //         } 
    
    //         await this.setState({
    //             placeholderImages: images
    //           })
    //         console.log(res);
    //    console.log('action: delete animal pictures success from action', res.data)
    // })
    .catch(err => {
       console.log('action:  delete animal pictures error from action: ', err.response)
    })
   
        
    }

    //my way
    callback = async (response) => {
        console.log('callback img_id ', response)

        // console.log('index in callback ',index)
    
        let updateInfo = {
          img_id: response[0].image.image_id,
          img_url: response[0].image.image_url,
          animal_id: this.props.paramsId
        }
    
        console.log('call updated info ', updateInfo)

        // let find = this.state.placeholderImages.findIndex(eachImage => eachImage === '')

        // let newPlaceholder = [...this.state.placeholderImages]

        // newPlaceholder[find] = updateInfo

        // this.setState({
        //     placeholderImages: newPlaceholder
        //   })
    
        await axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/api/animals/pictures`, updateInfo)
          .then(async result => {

            await axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/api/animals/${this.props.paramsId}/pictures`)
            .then(async res => {

                console.log(res.data)
                let images = res.data;

                for (let i = 6 - (6 - images.length); i < 6; i++){
                    images.push('');
                } 
      
                await this.setState({
                    placeholderImages: images
                  })
            })

    
          
            console.log('upload image success animal view', result)
          })
          .catch(error => {
            console.log('upload image error animal view', error)
          })
    
    
      }

    // callback = async (response) => {
    //     console.log('callback img_id ', response)
    
    //     let updateInfo = {
    //       img_id: response[0].image.image_id,
    //       img_url: response[0].image.image_url,
    //       animal_id: this.props.paramsId
    //     }
    
    //     console.log('call updated info ', updateInfo)
    
    //     await axios
    //       .post(`${process.env.REACT_APP_BACKEND_URL}/api/animals/pictures`, updateInfo)
    //       .then(async result => {

    //         await axios
    //         .get(`${process.env.REACT_APP_BACKEND_URL}/api/animals/${this.props.paramsId}/pictures`)
    //         .then(async res => {
    //             let images = res.data;

    //             for (let i = 6 - (6 - images.length); i < 6; i++){
    //                 images.push('');
    //             } 
      
    //             await this.setState({
    //                 placeholderImages: images
    //               })
    //         })

    
          
    //         console.log('upload image success animal view', result)
    //       })
    //       .catch(error => {
    //         console.log('upload image error animal view', error)
    //       })
    
    
    //   }

    render() {
 
         const { classes, fullScreen } = this.props;

        const customStyle = {
            imgCardStyle: {
                paddingTop: "2px",
                // width: "210px",
                // height: "200px"
                width: "100%",
                height: "auto"
            },
            imgTitle: {
                background:
                    'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                opacity: 0.8,
                fontSize: "26px",
                fontWeight: "bold",


            },
            imageUpload: {
                position: "absolute"
            },
            titleStyle: {
                padding: "10% 0px 0px 0px"
            },
            form1ControlStyle: {
                width: "100%",
                marginRight: "1%",
            },
            gridItemStyle: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            dialogPaper: {
                minHeight: '80vh',
                maxHeight: '80vh',
            }

        }

        const imageStyle = {

            media: {
                height: "100%",
                width: "100%",
                background: "lightgray",
                borderRadius: "5px",
                overflow: "hidden",
                padding: 0,
                position: "absolute"

            },

            image: {
                padding: 0,
                margin: 0,
                top: 0,
                height: "100%",
                width: "100%",
                objectFit: "cover",
                overflow: "hidden",
                position: "relative",
                borderRadius: "5px"
            },

            text: {
                padding: 0,
                margin: 0,
                opacity: 0.9,
                height: "25px",
                width: "100%",
                background: "lightgray",
                objectFit: "cover",
                overflow: "hidden",
                position: "absolute"
            }
        }

        const imageModalStyle = {

            media: {
                height: "auto",
                width: "100%",
                background: "lightgray",
                borderRadius: "5px",
                overflow: "hidden",
                padding: 0,
                position: "absolute"

            },

            image: {
                padding: 0,
                margin: 0,
                top: 0,
                height: "100%",
                width: "100%",
                objectFit: "cover",
                overflow: "hidden",
                position: "relative",
                borderRadius: "5px"
            },

            text: {
                padding: 0,
                margin: 0,
                opacity: 0.9,
                height: "25px",
                width: "100%",
                background: "lightgray",
                objectFit: "cover",
                overflow: "hidden",
                position: "absolute"
            }
        }
        return (

            <GridItem xs={12} sm={12} md={12} style={customStyle.gridItemStyle}>
                {/* <GridItem xs={12} sm={12} md={5}> */}
                <GridItem xs={8} sm={6} md={5} xl={3}>
                    <GridList className={classes.gridList} style={{ marginBottom: "10px" }}>
                        <GridListTile key={this.props.animal.img_url} style={customStyle.imgCardStyle} >

                            <ImageUploadEdit height="100%" width="100%"
                                defaultImage={this.props.animal.img_url}
                                borderRadius="5px" imageLimit={1}
                                customStyle={imageStyle}
                                editable={this.props.isEditing} callback={this.props.callback}
                                url={`${process.env.REACT_APP_BACKEND_URL}/api/pictures/animal/${this.props.paramsId}`} />


                            <GridListTileBar style={customStyle.imgTitle}
                                subtitle={<span>#{this.props.animal.id}</span>}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                            />



                            {this.props.isEditing &&
                                <Dialog style={{
                                    overflowY: "hidden"
                                }}
                                    fullScreen={fullScreen}
                                    open={this.props.open}
                                    onClose={this.props.handleClose}
                                    aria-labelledby="responsive-dialog-title"
                                >


                                    <DialogTitle id="alert-dialog-title" >{"Edit Pictures"}
                                    <IconButton style={{ float: "right",marginTop: "-16px" }} onClick={this.props.handleClose}>
                                        <CloseIcon />
                                    </IconButton>
                                    </DialogTitle>
                                    <GridContainer md={12}>
                                        {this.state.placeholderImages.map((eachImage,index) => (
                                            <GridItem xs={2} sm={2} md={4} key={eachImage.img_id}>
                                                <DialogContent style={{
                                                    height: "200px",
                                                    padding: 0,
                                                    position: "relative",
                                                    width: "169px",
                                                    margin: "0 9px 9px 9px"
                                                }}>
                                                    {eachImage !== '' ?
                                                        <div>
                                                            <ImageUploadEdit height="150px" width="150px"
                                                                defaultImage={eachImage.img_url}
                                                                borderRadius="5px" imageLimit={1}
                                                                editable={this.props.isEditing} callback={this.callback}
                                                                url={`${process.env.REACT_APP_BACKEND_URL}/api/pictures`} />

                                                            {/* color: "#cd5c5c", */}
                                                            <IconButton style={{ float: "right", color: "rgba(170, 39, 176, 0.83)", marginTop: "-204px", }} 
                                                            onClick={(event) => this.deletePicture(event, eachImage.img_id) }>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </div>
                                                        :
                                                        <div>
                                                            <ImageUploadEdit height="150px" width="150px"
                                                                borderRadius="5px" imageLimit={1}
                                                                editable={this.props.isEditing} callback={this.callback }
                                                                url={`${process.env.REACT_APP_BACKEND_URL}/api/pictures`} />
                                                            <IconButton style={{ float: "right", color: "rgba(170, 39, 176, 0.83)", marginTop: "-204px", }} 
                                                            onClick={(event) => this.deletePicture(event, eachImage.img_id) }>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </div>}

                                                </DialogContent>
                                            </GridItem>
                                        ))}

                                    </GridContainer>


                                    {/* <Button onClick={this.props.handleClose} color="primary" autoFocus>
                                        Close
                                    </Button> */}
                                    

                                </Dialog>
                            }


                        </GridListTile>

                    </GridList>

                    <div style={{
                        display: "flex",
                        width: "200px",
                        justifyContent: "center"
                    }}>
                        <Button size="small" variant="contained" style={{ backgroundColor: "#A364A5", color: "white" }}
                            className={classes.button} onClick={this.props.handleViewingPics}>
                            {this.props.isEditing ? "EDIT PHOTOS" : "VIEW MORE PHOTOS"}
                        </Button>

                    </div>

                    {!this.props.isEditing &&
                        <Dialog style={{
                            overflowY: "hidden"
                        }}
                            fullScreen={fullScreen}
                            open={this.props.open}
                            onClose={this.props.handleClose}
                            aria-labelledby="responsive-dialog-title"
                        >

                            
                            <DialogTitle id="alert-dialog-title" >{"View Pictures"}
                            <IconButton style={{ float: "right",marginTop: "-16px"}} onClick={this.props.handleClose}>
                                <CloseIcon />
                            </IconButton>
                            </DialogTitle>
                            <GridContainer md={12}>
                                {this.state.placeholderImages.map(eachImage => (
                                    <GridItem md={4} key={eachImage.img_id}>
                                        <DialogContent style={{
                                            height: "200px",
                                            padding: 0,
                                            position: "relative",
                                            width: "169px",
                                            margin: "0 9px 9px 9px"
                                        }}>

                                            <ImageUploadEdit height="100%" width="100%"
                                                defaultImage={eachImage.img_url}
                                                borderRadius="5px" imageLimit={1}
                                                customStyle={imageModalStyle}
                                                editable={this.props.isEditing} callback={this.props.callback}
                                                url={`${process.env.REACT_APP_BACKEND_URL}/api/pictures`} />

                                        </DialogContent>
                                    </GridItem>
                                ))}

                            </GridContainer>


                            {/* <Button onClick={this.props.handleClose} color="primary" autoFocus>
                                Close
                                    </Button> */}




                        </Dialog>
                    }

                </GridItem>

                <GridItem xs={12} sm={12} md={7}>
                    <div style={customStyle.titleStyle}>
                        {this.props.isEditing ?
                            <form>
                                <TextField style={customStyle.form1ControlStyle}
                                    success={this.props.textState.nameState === "success"}
                                    error={this.props.textState.nameState === "error"}

                                    name="name"
                                    label="Name"
                                    className={classes.textField}
                                    value={this.props.animal.name}
                                    onChange={this.props.handleTextField}
                                    margin="normal"
                                />

                                <TextField style={customStyle.form1ControlStyle}
                                    success={this.props.textState.descriptionState === "success"}
                                    error={this.props.textState.descriptionState === "error"}

                                    name="description"
                                    label="Description"
                                    multiline
                                    className={classes.textField}
                                    value={this.props.animal_meta.description}
                                    onChange={this.props.handleMetaTextField}
                                    margin="normal"
                                />

                                <FormControl style={customStyle.form1ControlStyle} className={classes.formControl} >
                                    <InputLabel htmlFor="shelter_location_id">Location</InputLabel>
                                    <Select
                                        value={this.props.animal.nickname}
                                        name='shelter_location_id'
                                        onChange={this.props.handleAdoption}
                                        renderValue={value => `${value}`}
                                        input={<Input id='shelter_location_id' />}
                                    >

                                        {this.props.locations.map(status => {
                                            return (
                                                <MenuItem key={status.id} value={status.id}>
                                                    {status.nickname}, {status.street_address}, {status.city}, {status.state_id}- {status.zipcode}</MenuItem>
                                            )
                                        })}

                                    </Select>
                                </FormControl>
                            </form> :
                            <div>
                                <h1>{this.props.animal.name}</h1>
                                <legend>{this.props.animal_meta.description}</legend>
                                <p>Located at : {this.props.animal.nickname}</p>
                            </div>
                        }

                    </div>

                </GridItem>
            </GridItem >
        )
    }
}

AnimalViewTop.propTypes = {
    classes: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        locations: state.animalReducer.dropdownAnimalOptions.locations,
     }
}

export default connect(
    mapStateToProps, null
)(withStyles(regularFormsStyle)(AnimalViewTop)) 