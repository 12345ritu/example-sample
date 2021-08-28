import React, { useState } from "react";
import { Button, Container, Grid } from '@material-ui/core';
import { questions } from '../mockdata/question.mocks';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { dateFormat } from "../utils/common.utils";

const Home = () => {
    const [question, setQuestions] = useState<any>(questions);

    const handleClick = () => {
        const buildUrl = 'http://localhost:3000/';
        window.open(buildUrl);
    }

    const countDownCircleCounter = () => {
        return (
            <CountdownCircleTimer
                size={100}
                isPlaying={true}
                duration={parseInt('2000')}
                colors={[['#3f51b5', 0.33]]}
            />
        );
    };

    return (
        <Container>
            <Grid container={true} justify="center" direction="row" lg={12}>
                <p>Multiple choice questions</p>
                <p>{countDownCircleCounter()}</p>
            </Grid>
            <Grid container={true} justify="center" direction="column" lg={12}>
                {question.map((questionObj: any, index: number) => (
                    <Grid item={true} spacing={10}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">{index + 1}{'.'}{questionObj.question}</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="a" control={<Radio color="primary" />} label={dateFormat(questionObj.options.a)} />
                                <FormControlLabel value="b" control={<Radio color="primary" />} label={<iframe src={questionObj.options.b}></iframe>} />
                                <FormControlLabel value="c" control={<Radio color="primary" />} label={questionObj.options.c} />
                                <FormControlLabel value="d" control={<Radio color="primary" />} label={questionObj.options.d} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                ))}
                <Grid item={true}>
                    <Button size="medium" variant="contained" color="primary" onClick={() => handleClick()}>Submit</Button>
                </Grid>
            </Grid>
        </Container >

    )
}

export default Home;