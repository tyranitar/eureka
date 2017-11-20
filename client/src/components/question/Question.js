import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { FlatButton, RaisedButton } from 'material-ui';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';

import './Question.css';

const renderCheckboxOptions = ({
    options,
    answer,
    onSelectAnswer,
}) => {
    return options.map((option, idx) => {
        return (
            <Checkbox
                className="question-option"
                key={ idx }
                label={ option }
                checked={ answer && answer.has(idx) }
                onCheck={ onSelectAnswer.bind(null, idx) }
            />
        );
    });
};

const renderRadioOptions = ({
    questionIdx,
    options,
    answer,
    onSelectAnswer,
}) => {
    const children = options.map((option, idx) => {
        return (
            <RadioButton
                className="question-option"
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
};

const renderOptions = (type, params) => {
    switch (type) {
        case 'checkbox':
            return renderCheckboxOptions(params);
        case 'radio':
            return renderRadioOptions(params);
        default:
            return [];
    }
};

const isNextDisabled = ({
    type,
    answer,
}) => {
    switch (type) {
        case 'radio':
            return answer === undefined;
        case 'checkbox':
            return answer === undefined || answer.size === 0;
        default:
            return false;
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
    onSubmit,
}) => (
    <div>
        <Card className="question-card">
            <CardTitle>
                { text }
            </CardTitle>
            <CardText>
                { renderOptions(type, {
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
                    disabled={ isNextDisabled({ type, answer }) }
                    onClick={ isLastQuestion ? onSubmit : onChangeQuestion.bind(null, 1) }
                />
            </CardActions>
        </Card>
        { /* FIXME */ }
        <div className="background"></div>
    </div>
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
    onSubmit: PropTypes.func.isRequired,
};

export default Question;