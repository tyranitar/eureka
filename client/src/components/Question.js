import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { FlatButton, RaisedButton } from 'material-ui';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import './Question.css';

const renderOptions = ({
    type,
    questionIdx,
    options,
    answer,
    onSelectAnswer,
}) => {
    switch (type) {
        case 'radio':
            const children = options.map((option, idx) => {
                return (
                    <RadioButton
                        className='question-radio'
                        key={ idx }
                        value={ idx }
                        label={ option }
                        onClick={ onSelectAnswer.bind(null, idx) }
                    />
                );
            });

            return (
                <RadioButtonGroup
                    name={ questionIdx.toString() }
                    valueSelected={ answer }
                >
                    { children }
                </RadioButtonGroup>
            );
        default:
            return [];
    }
};

const Question = ({
    questionIdx,
    isLastQuestion,

    question: {
        type,
        text,
        options,
        answer,
    },

    onChangeQuestion,
    onSelectAnswer,
}) => (
    <Card className="question-card">
        <CardTitle>
            { text }
        </CardTitle>
        <CardText>
            { renderOptions({
                type,
                questionIdx,
                options,
                answer,
                onSelectAnswer,
            }) }
        </CardText>
        <CardActions className="question-card-actions">
            <FlatButton
                className={ questionIdx === 0 ? 'question-hidden-button' : '' }
                label="Previous"
                primary={ true }
                onClick={ onChangeQuestion.bind(null, -1) }
            />
            <RaisedButton
                className="question-next-button"
                primary={ true }
                label={ isLastQuestion ? 'Submit' : 'Next' }
                onClick={ onChangeQuestion.bind(null, 1) }
            />
        </CardActions>
    </Card>
);

Question.propTypes = {
    questionIdx: PropTypes.number.isRequired,
    isLastQuestion: PropTypes.bool.isRequired,

    question: PropTypes.shape({
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,

        answer: PropTypes.oneOfType([
            PropTypes.number.isRequired,
            PropTypes.instanceOf(Set).isRequired,
        ]),
    }),

    onChangeQuestion: PropTypes.func.isRequired,
    onSelectAnswer: PropTypes.func.isRequired,
};

export default Question;