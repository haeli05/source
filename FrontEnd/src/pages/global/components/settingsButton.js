import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';
// Icon
import { Icon } from 'react-icons-kit';
import {arrows_remove} from 'react-icons-kit/linea/arrows_remove';
// SVG
import ReactSVG from 'react-svg';
import Write from './../../../assets/svg/write.svg';
import Cross from './../../../assets/svg/cross.svg';
import Gear from './../../../assets/multimedia-collection/settings.svg';
// Redux
import { connect } from 'react-redux';
import {
  uploadProfilePicture,
  updateUser,
  addUpdateUserStatus
} from './../../../actions/user.actions';
import {
  getUser,
  getUpdateUserStatus,
  getUploadProfilePictureStatus,
  getAvatarStatus,
  getAWSStatus
} from './../../../reducers/user.reducer';
// MISC
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import {SocialIcon} from 'react-social-icons';


class SettingsButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      // Projects
      project_name: '',
      project_name_error: false,
      project_name_helpertext: "",
      project_description: '',
      project_description_helpertext: "What's your project about?",
      project_tags: [],
      project_social: [],
      // Profiles
      display_name: (this.props.user.user.name===undefined) ? '' : this.props.user.user.name,
      display_name_error: false,
      display_name_helpertext: "",
      user_description: (this.props.user.user.description===undefined) ? '' : this.props.user.user.description,
      user_skills: (this.props.user.user.skills===undefined) ? '' : this.props.user.user.skills.join(","),
      user_social: (this.props.user.user.social===undefined) ? [] : this.props.user.user.social,
      user_social_input: "",
      user_location: (this.props.user.user.location===undefined) ? '' : this.props.user.user.location,
      user_website: (this.props.user.user.website===undefined) ? '' : this.props.user.user.website,
      user_wallets: [],
      file: this.props.user.user.avatar,
      editFile: false,
      fileScale: 1,
    };
    this.toggleOpen=this.toggleOpen.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
    this.deleteSocial=this.deleteSocial.bind(this);
    this.submit=this.submit.bind(this);
    this.submitProfilePicture=this.submitProfilePicture.bind(this);
    this.cancelImage=this.cancelImage.bind(this);
    this.handleDrop=this.handleDrop.bind(this);
    this.editPicture=this.editPicture.bind(this);
  }

  //TODO: this (doesn't work)
  getImageFromURL(url){
    var img = new Image();
    img.src = url
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    var base64Image = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

    var pos = base64Image.indexOf(';base64,');
    var type = base64Image.substring(5, pos);
    var b64 = base64Image.substr(pos + 8);
    var imageContent = atob(b64);
    var buffer = new ArrayBuffer(imageContent.length);
    var view = new Uint8Array(buffer);
    for(var n = 0; n < imageContent.length; n++) {
      view[n] = imageContent.charCodeAt(n);
    }
    var blob = new Blob([buffer], { type: type });

    return blob
  }

  toggleOpen(){
    this.setState({open:!this.state.open});
    this.props.dispatch(addUpdateUserStatus(false))
  }

  handleChange(target, e){
    if(target==="user_skills"){
      let value = e.target.value.replace(/[^a-zA-Z, ]/g, "");
      value = value.replace(/\s/g, "");
      let change ={}
      change[target] = value
      this.setState(change)
    } else {
      let change ={}
      change[target] = e.target.value
      this.setState(change)
    }
  }

  handleKeyPress(event){
    if(event.key==="Enter"){
      var socialLink = this.state.user_social_input
      if (this.state.user_social_input.slice(0,3)==="www"){
        socialLink = 'https://' + this.state.user_social_input
      } else if (this.state.user_social_input.slice(0,4)!=="http"){
        socialLink = 'https://www.' + this.state.user_social_input
      }
      this.state.user_social.push(socialLink)
      this.setState({user_social_input:""})
    }
  }

  deleteSocial(e,url){
    e.preventDefault()
    var socialArrayCopy = this.state.user_social
    var indexOfURL = socialArrayCopy.indexOf(url)
    socialArrayCopy.splice(indexOfURL,1)
    this.setState({user_social:socialArrayCopy})
  }

  submit(){
    if(this.props.type==="profile"){
      if (this.state.display_name==='') {
        this.setState({display_name_error:true})
        this.setState({display_name_helpertext:"Display name is required"})
      } else {
        this.setState({display_name_error:false})
        this.setState({display_name_helpertext:""})
        var updateDetails = {
          name: this.state.display_name,
          location: this.state.user_location,
          website: this.state.user_website,
          description: this.state.user_description,
          skills: this.state.user_skills.split(","),
          social: this.state.user_social,
        }
        this.props.dispatch(updateUser(updateDetails))
      }
    } else if (this.props.type==="project"){
      if (this.state.project_name==='') {
        this.setState({project_name_error:true})
      } else {
        this.setState({project_name_error:false})
      }
    }
  }

  submitProfilePicture(){
    if (this.editor) {
      this.setState({editFile:false})
      const croppedPicture = this.editor.getImage()
      const base64Image = croppedPicture.toDataURL("image/png")

      // Thank you so much to:
      // https://stackoverflow.com/questions/38658654/how-to-convert-a-base64-string-into-a-file

      // extract content type and base64 payload from original string
      var pos = base64Image.indexOf(';base64,');
      var type = base64Image.substring(5, pos);
      var b64 = base64Image.substr(pos + 8);

      // decode base64
      var imageContent = atob(b64);

      // create an ArrayBuffer and a view (as unsigned 8-bit)
      var buffer = new ArrayBuffer(imageContent.length);
      var view = new Uint8Array(buffer);

      // fill the view, using the decoded base64
      for(var n = 0; n < imageContent.length; n++) {
        view[n] = imageContent.charCodeAt(n);
      }

      // convert ArrayBuffer to Blob
      var blob = new Blob([buffer], { type: type });


      this.props.dispatch(uploadProfilePicture(blob))
    }
  }

  cancelImage(){
    this.setState({file:null})
  }

  handleDrop(dropped){
    this.setState({file: dropped[0]})
  }

  editPicture(){
    if(this.state.editFile===true){
      this.setState({file:this.props.user.user.avatar})
      this.setState({fileScale:1})
    }
    this.setState({editFile:!this.state.editFile})
  }

  setEditorRef = (editor) => this.editor = editor

  render() {
    return (
      <div>
        <div className="SettingsButton">
          <Button variant="fab" mini onClick={this.toggleOpen}>
            <ReactSVG src={Gear} className="ReactSVGIcon" />
          </Button>
        </div>
        <Dialog onClose={this.toggleOpen} open={this.state.open} maxWidth="md">
          <div className="SettingsDialog">
            <div className="SettingsDialogHeader">
              <Typography variant="h4">{this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)} Settings</Typography>
              <Button variant="fab" mini onClick={this.toggleOpen} className="CloseButton">
                <Icon icon={arrows_remove} size={20} />
              </Button>
            </div>
            <div className="SettingsDialogBody">
              {this.props.type === "project" && (
                <div className="ProjectSettings">

                    <Typography className="Label" variant="body2">Update Photo</Typography>
                  <Button
                    className="InputFull"
                     containerElement='photo'
                     label='Update Photo'>
                     <input type="file" />
                  </Button>
                      <TextField
                      error={false}
                      required
                      id="outlined-name"
                      className="InputFull"
                      label="Project Name"
                      value="Default"
                      onChange={(e)=>{this.handleChange("project_name", e)}}
                      margin="normal"
                      variant="outlined"
                      helperText={this.state.project_name_helpertext}
                      />
                      <TextField
                      error={this.state.project_name_error}
                        className="InputFull"
                      id="outlined-name"
                      label="Project Description"
                      onChange={(e)=>{this.handleChange("project_description", e)}}
                      value="Default"
                      margin="normal"
                      variant="outlined"
                      helperText={this.state.project_description_helpertext}
                      />
                      <TextField
                        className="InputFull"
                      id="tags"
                      label="Tags"
                      value="Default"
                      helperText="Separate tags by comma: c++, javascript, source"
                      margin="normal"
                      variant="outlined"
                      />
                      <TextField
                        className="InputFull"
                      id="social"
                      label="Social Links"
                      value="social"
                      helperText="Separate social links by comma: https://www.twitter.com/source_platform, "
                      margin="normal"
                      variant="outlined"
                      />

                      <Typography className="Label" variant="body2">Source Pay: Crypto Public Keys</Typography>
                      <TextField
                        className="InputFull"
                      id="btc"
                      label="Bitcoin(BTC)"
                      value="Public Key"
                      helperText=""
                      margin="normal"
                      variant="outlined"
                      />
                      <TextField
                        className="InputFull"
                      id="bch"
                      label="Bitcoin Cash(BCH)"
                      value="Public Key"
                      helperText=""
                      margin="normal"
                      variant="outlined"
                      />
                      <TextField
                      className="InputFull"
                      id="eth"
                      label="Ethereum(ETH)"
                      value="Public Key"
                      helperText=""
                      margin="normal"
                      variant="outlined"
                      />
                      <TextField
                        className="InputFull"
                      id="qtm"
                      label="QuantStamp(QTM)"
                      value="Public Key"
                      helperText=""
                      margin="normal"
                      variant="outlined"
                      />
                      <TextField
                        className="InputFull"
                      id="doge"
                      label="DogeCoin(DOGE)"
                      value="Public Key"
                      helperText=""
                      margin="normal"
                      variant="outlined"
                      />
                      <Button variant="outlined" color="error" mini onClick={this.toggleOpen}>
                        Delete Project
                      </Button>
                </div>
              )}
              {this.props.type === "profile" && (
                <div>
                  {this.props.updateUserStatus==="PENDING" && (
                    <div className="GenericLinearLoading">
                      <LinearProgress color="secondary" variant="query"/>
                    </div>
                  )}
                  {this.props.updateUserStatus==="SUCCESS" && (
                    <div className="Flex JustifyCenter">
                      <Typography variant="h2">User profile updated!</Typography>
                    </div>
                  )}
                  {(this.props.updateUserStatus!=="PENDING" && this.props.updateUserStatus!=="SUCCESS") && (
                    <div className="UserSettings">
                      <div className="UserSettingsLeft">
                        <Typography variant="subtitle1">Update Photo</Typography>
                        {this.state.editFile && (
                          <div>
                            {!this.state.file && (
                              <div className="ProfileDropzoneDiv">
                                <Dropzone
                                  onDrop={this.handleDrop}
                                  style={{ width: '250px', height: '250px' }}
                                  className="ProfilePictureDropzone"
                                >
                                  <Typography variant="subtitle1">Drop image here or click to choose</Typography>
                                </Dropzone>
                              </div>
                            )}
                            {this.state.file && (
                              <div className="ProfilePictureEditor">
                                <Dropzone
                                  onDrop={this.handleDrop}
                                  disableClick
                                  style={{ width: '250px', height: '250px' }}
                                >
                                  <AvatarEditor
                                    ref={this.setEditorRef}
                                    image={this.state.file}
                                    width={250}
                                    height={250}
                                    border={0}
                                    borderRadius={250}
                                    scale={this.state.fileScale}
                                  />
                                </Dropzone>
                                <div className="ProfilePictureOptions">
                                  <Typography variant="subtitle1">Zoom</Typography>
                                  <input className="ZoomSlider" type="range" min="1" max="3" step="0.1" value={this.state.fileScale} onChange={(e)=>{this.handleChange("fileScale",e)}}/>
                                  <div className="NewPictureButton">
                                    <Button variant="outlined" onClick={this.cancelImage}>New Picture</Button>
                                  </div>
                                  <div className="Flex">
                                    <div className="MarginRight10">
                                      <Button variant="outlined" onClick={this.editPicture}>Cancel</Button>
                                    </div>
                                    <Button variant="contained" color="primary" onClick={this.submitProfilePicture}>Upload</Button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                        {!this.state.editFile && (
                          <div>
                            {(this.props.uploadProfilePictureStatus==="PENDING" || this.props.avatarStatus==="PENDING" || this.props.awsStatus==="PENDING") && (
                              <div className="GenericLinearLoading">
                                <LinearProgress color="secondary" variant="query"/>
                              </div>
                            )}
                            {((this.props.uploadProfilePictureStatus==="SUCCESS" || this.props.uploadProfilePictureStatus===false) && (this.props.avatarStatus==="SUCCESS" || this.props.avatarStatus===false) && (this.props.awsStatus==="SUCCESS" || this.props.awsStatus===false)) && (
                              <div className="ProfileDropzoneDiv">
                                <Avatar src={this.props.user.user.avatar} className="AvatarPreview" onClick={this.editPicture}/>
                                <div className="EditPictureOverlay" onClick={this.editPicture}>
                                  <Typography className="EditText" variant="h2">Edit</Typography>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                        <TextField
                          error={this.state.display_name_error}
                          helperText={this.state.display_name_helpertext}
                          required
                          fullWidth
                          label="Display Name"
                          value={this.state.display_name}
                          onChange={(e)=>{this.handleChange("display_name", e)}}
                          margin="normal"
                          variant="outlined"
                        />
                        <TextField
                          fullWidth
                          label="Description"
                          value={this.state.user_description}
                          onChange={(e)=>{this.handleChange("user_description", e)}}
                          margin="normal"
                          variant="outlined"
                        />
                        <TextField
                          fullWidth
                          label="Skills"
                          value={this.state.user_skills}
                          onChange={(e)=>{this.handleChange("user_skills", e)}}
                          margin="normal"
                          variant="outlined"
                          helperText="Comma separated"
                        />
                        <TextField
                          fullWidth
                          label="Location"
                          value={this.state.user_location}
                          onChange={(e)=>{this.handleChange("user_location", e)}}
                          margin="normal"
                          variant="outlined"
                        />
                        <div className="Flex">
                          {this.state.user_social.map(url=>{
                            return(
                              <div key={url} className="MarginRight10">
                                <Tooltip title="Delete" placement="top">
                                  <SocialIcon url={url} onClick={(e)=>{this.deleteSocial(e,url)}}/>
                                </Tooltip>
                              </div>
                            )
                          })}
                        </div>
                        <TextField
                          fullWidth
                          label="Social Links"
                          value={this.state.user_social_input}
                          onChange={(e)=>{this.handleChange("user_social_input", e)}}
                          onKeyPress={this.handleKeyPress}
                          margin="normal"
                          variant="outlined"
                          helperText="Paste link and hit enter"
                        />
                        <TextField
                          fullWidth
                          label="Website"
                          value={this.state.user_website}
                          onChange={(e)=>{this.handleChange("user_website", e)}}
                          margin="normal"
                          variant="outlined"
                        />
                      </div>
                      <div className="UserSettingsRight">
                      <FormControl style={{color:"white"}}>
                        <div className="SourcePayInputs">
                        <Typography variant="h6" color="textSecondary">Source Pay</Typography>
                          <TextField
                            color="inherit"
                            fullWidth
                            label="DogeCoin Wallet"
                            onChange={(e)=>{this.handleChange("display_name", e)}}
                            margin="normal"
                            variant="outlined"
                          />
                          <TextField
                            fullWidth
                            label="Bitcoin Wallet"
                            onChange={(e)=>{this.handleChange("display_name", e)}}
                            margin="normal"
                            variant="outlined"
                            color="#FFFFFF"
                          />
                          <TextField
                            fullWidth
                            label="Bitcoin Cash Wallet"
                            onChange={(e)=>{this.handleChange("display_name", e)}}
                            margin="normal"
                            variant="outlined"
                            color="#FFFFFF"
                          />
                          <TextField
                            fullWidth
                            label="Ethereum Wallet"
                            onChange={(e)=>{this.handleChange("display_name", e)}}
                            margin="normal"
                            variant="outlined"
                            color="#FFFFFF"
                          />
                          <TextField
                            fullWidth
                            label="QuantStamp Wallet"
                            onChange={(e)=>{this.handleChange("display_name", e)}}
                            margin="normal"
                            variant="outlined"
                            color="inherit"
                          />
                          <div className="NewWalletInput Flex AlignCenter">
                            <div className="WalletTypeInput MarginRight10">
                              <TextField
                                label="Wallet Type"
                                onChange={(e)=>{this.handleChange("display_name", e)}}
                                margin="normal"
                                variant="outlined"
                                color="inherit"
                              />
                            </div>
                            <TextField
                              fullWidth
                              label="Address"
                              onChange={(e)=>{this.handleChange("display_name", e)}}
                              margin="normal"
                              variant="outlined"
                              color="inherit"
                            />
                            <div className="MarginLeft10">
                              <Button variant="outlined" className="AddButton">Add</Button>
                            </div>
                          </div>
                          <Button variant="outlined" color="error" mini onClick={this.toggleOpen}>
                            Delete Account
                          </Button>
                        </div>
                      </FormControl>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {(this.props.updateUserStatus!=="PENDING" && this.props.updateUserStatus!=="SUCCESS") && (
                <div className="Flex">
                  <div className="MarginRight10">
                    <Button variant="contained" className="SaveButton" color="primary" onClick={this.submit}>Save</Button>
                  </div>
                  <Button variant="contained" className="DeleteButton" color="error">Delete</Button>
                </div>
              )}
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    updateUserStatus: getUpdateUserStatus(state),
    uploadProfilePictureStatus: getUploadProfilePictureStatus(state),
    awsStatus: getAWSStatus(state),
    avatarStatus: getAvatarStatus(state)
  }
}


export default connect(mapStateToProps)(SettingsButton);
