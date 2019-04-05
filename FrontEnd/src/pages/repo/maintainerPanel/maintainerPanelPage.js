import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {arrows_check} from 'react-icons-kit/linea/arrows_check'
import {arrows_remove} from 'react-icons-kit/linea/arrows_remove'
import Icon from 'react-icons-kit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


class MaintainerPanelPage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="MaintainerPanelPage">
        <div className="Header">
          <Typography variant="overline">PROJECT</Typography>
          <Typography variant="display4">RepoName / Maintainer Panel</Typography>
        </div>
        <div className="Body">
          <div className="Container1">
            <div className="MergeRequests">
              <div className="MergeRequestsTitle">
                <Typography variant="title">Merge Requests</Typography>
                <Typography variant="title">2</Typography>
              </div>
              <List component="nav">
                <ListItem button className="ListItem">
                  <div className="Left">
                    <div className="Title">
                      <Typography variant="body1" className="Name">merge request name</Typography>
                      <Typography variant="caption" className="By">by</Typography>
                      <Typography variant="body1" className="Author">author</Typography>
                    </div>
                    <div className="Branches">
                      <Typography variant="body1" className="Source">branch name</Typography>
                      <Typography variant="caption" className="To">to</Typography>
                      <Typography variant="body1" className="Destination">master</Typography>
                    </div>
                  </div>
                  <div className="Right">
                    <Button className="Button" color="primary"><Icon icon={arrows_check} size={20}/></Button>
                    <Button className="Button" color="secondary"><Icon icon={arrows_remove} size={20}/></Button>
                  </div>
                </ListItem>
                <ListItem button className="ListItem">
                  <div className="Left">
                    <div className="Title">
                      <Typography variant="body1" className="Name">merge request name</Typography>
                      <Typography variant="caption" className="By">by</Typography>
                      <Typography variant="body1" className="Author">author</Typography>
                    </div>
                    <div className="Branches">
                      <Typography variant="body1" className="Source">branch name</Typography>
                      <Typography variant="caption" className="To">to</Typography>
                      <Typography variant="body1" className="Destination">master</Typography>
                    </div>
                  </div>
                  <div className="Right">
                    <Button className="Button" color="primary"><Icon icon={arrows_check} size={20}/></Button>
                    <Button className="Button" color="secondary"><Icon icon={arrows_remove} size={20}/></Button>
                  </div>
                </ListItem>
                <ListItem button className="ViewAll">
                  <Typography variant="body1">view all</Typography>
                </ListItem>
              </List>
            </div>
            <div className="OpenIssues">
              <div className="OpenIssuesTitle">
                <Typography variant="title">Open Issues</Typography>
                <Typography variant="title">2</Typography>
              </div>
              <List component="nav">
                <ListItem button className="ListItem">
                  <div className="Left">
                    <div className="Title">
                      <Typography variant="body1" className="Name">issue name</Typography>
                      <Typography variant="caption" className="By">by</Typography>
                      <Typography variant="body1" className="Author">author</Typography>
                    </div>
                  </div>
                  <div className="Right">
                    <Button className="Button" size="small">Mark resolved</Button>
                    <Button className="Button" size="small">Close issue</Button>
                  </div>
                </ListItem>
                <ListItem button className="ListItem">
                  <div className="Left">
                    <div className="Title">
                      <Typography variant="body1" className="Name">issue name</Typography>
                      <Typography variant="caption" className="By">by</Typography>
                      <Typography variant="body1" className="Author">author</Typography>
                    </div>
                  </div>
                  <div className="Right">
                    <Button className="Button" size="small">Mark resolved</Button>
                    <Button className="Button" size="small">Close issue</Button>
                  </div>
                </ListItem>
                <ListItem button className="ViewAll">
                  <Typography variant="body1">view all</Typography>
                </ListItem>
              </List>
            </div>
          </div>
          <div className="Container2">
            <div className="RolesTitle">
              <Typography variant="title">Roles</Typography>
            </div>
            <div className="Roles">
              <div className="Role">
                <div className="RoleHeader">
                  <Typography variant="title">Default</Typography>
                </div>
                <div className="RoleRep">
                  <Typography variant="overline">Rep Required: 0</Typography>
                </div>
                <div className="RoleActions">
                  <div className="Table">
                    <div className="Row">
                      <div className="Action">
                        <Typography variant="overline" className="Title">Action</Typography>
                      </div>
                      <div>
                        <Typography variant="overline" className="Title">REP</Typography>
                      </div>
                      <div>
                        <Typography variant="overline" className="Title">SRC</Typography>
                      </div>
                    </div>
                    <div className="Row">
                      <div className="Action">
                        <Typography className="body1">Star</Typography>
                      </div>
                      <div>
                        <Typography className="body1">1</Typography>
                      </div>
                      <div>
                        <Typography className="body1">1</Typography>
                      </div>
                    </div>
                    <div className="Row">
                      <div className="Action">
                        <Typography className="body1">Submit Merge Request</Typography>
                      </div>
                      <div>
                        <Typography className="body1">1</Typography>
                      </div>
                      <div>
                        <Typography className="body1">1</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Modify">
                  <Button>Modify</Button>
                </div>
              </div>
              <div className="Role">
                <div className="RoleHeader">
                  <Typography variant="title">Common</Typography>
                </div>
                <div className="RoleRep">
                  <Typography variant="overline">Rep Required: 25</Typography>
                </div>
                <div className="RoleActions">
                  <div className="Table">
                    <div className="Row">
                      <div className="Action">
                        <Typography variant="overline" className="Title">Action</Typography>
                      </div>
                      <div>
                        <Typography variant="overline" className="Title">REP</Typography>
                      </div>
                      <div>
                        <Typography variant="overline" className="Title">SRC</Typography>
                      </div>
                    </div>
                    <div className="Row">
                      <div className="Action">
                        <Typography className="body1">Commit</Typography>
                      </div>
                      <div>
                        <Typography className="body1">1</Typography>
                      </div>
                      <div>
                        <Typography className="body1">2</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Modify">
                  <Button>Modify</Button>
                </div>
              </div>
              <div className="Role">
                <div className="RoleHeader">
                  <Typography variant="title">Power User</Typography>
                </div>
                <div className="RoleRep">
                  <Typography variant="overline">Rep Required: 300</Typography>
                </div>
                <div className="RoleActions">
                  <div className="Table">
                    <div className="Row">
                      <div className="Action">
                        <Typography variant="overline" className="Title">Action</Typography>
                      </div>
                      <div>
                        <Typography variant="overline" className="Title">REP</Typography>
                      </div>
                      <div>
                        <Typography variant="overline" className="Title">SRC</Typography>
                      </div>
                    </div>
                    <div className="Row">
                      <div className="Action">
                        <Typography className="body1">Close/Resolve Issues</Typography>
                      </div>
                      <div>
                        <Typography className="body1">1</Typography>
                      </div>
                      <div>
                        <Typography className="body1">1</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Modify">
                  <Button>Modify</Button>
                </div>
              </div>
              <div className="Role">
                <div className="RoleHeader">
                  <Typography variant="title">Maintainer</Typography>
                </div>
                <div className="RoleRep">
                  <Typography variant="overline">Rep Required: 1000</Typography>
                </div>
                <div className="RoleActions">
                  <div className="Table">
                    <div className="Row">
                      <div className="Action">
                        <Typography variant="overline" className="Title">Action</Typography>
                      </div>
                      <div>
                        <Typography variant="overline" className="Title">REP</Typography>
                      </div>
                      <div>
                        <Typography variant="overline" className="Title">SRC</Typography>
                      </div>
                    </div>
                    <div className="Row">
                      <div className="Action">
                        <Typography className="body1">Accept Merge Requests</Typography>
                      </div>
                      <div>
                        <Typography className="body1">2</Typography>
                      </div>
                      <div>
                        <Typography className="body1">4</Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Modify">
                  <Button>Modify</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default MaintainerPanelPage;
