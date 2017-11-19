import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { FlatButton, RaisedButton } from 'material-ui';

import './Questionnaire.css';

class Questionnaire extends Component {
    render() {
        return (
            <Card className="questionnaire-card">
                <CardTitle>
                    Question
                </CardTitle>
                <CardText>
                    Answers
                </CardText>
                <CardActions className="questionnaire-card-actions">
                    <FlatButton label="Previous" primary={ true } />
                    <RaisedButton
                        className="questionnaire-next-button"
                        primary={ true }
                        label="Next"
                    />
                </CardActions>
            </Card>
        );
    }
}

export default Questionnaire;