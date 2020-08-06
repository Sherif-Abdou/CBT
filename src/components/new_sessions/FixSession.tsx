import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleSessionStage} from "../../redux/session_state/actions";
import {StoreInterface} from "../../redux";
import {Session} from "../../redux/types";

interface Props {

}

export default function FixSession(props: Props) {
    const dispatch = useDispatch();
    const temp = useSelector((state: StoreInterface) => state.session_state.temp_session) as Session;

    const submit_func = () => {
        dispatch(toggleSessionStage());
    }

    return (<div className="row-container">
        <h1 className="header">Fixes</h1>
        <div className="left-side">
            {temp.pre_feelings}
        </div>
        <div className="right-side">
            <b>MIND READING</b> You assume that you know what people think without having sufficient evidence of their thoughts. “He thinks I’m a loser.”
            <br/><br/>
            <b>FORTUNE-TELLING</b> You predict the future negatively: Things will get worse, or there is danger ahead. “I’ll fail that exam,” or “I won’t get the job.”
            <br/><br/>
            <b>CATASTROPHIZING</b> You believe that what has happened or will happen will be so awful and unbearable that you won’t be able to stand it. “It would be terrible if I failed.”
            <br/><br/>
            <b>LABELING</b> You assign global negative traits to yourself and others. “I’m undesirable,” or “He’s a rotten person.”
            <br/><br/>
            <b>DISCOUNTING POSITIVES</b> You claim that the positive things you or others do are trivial. “That’s what wives are supposed to do—so it doesn’t count when she’s nice to me,” or “Those successes were easy, so they don’t matter.”
            <br/><br/>
            <b>NEGATIVE FILTERING</b> You focus almost exclusively on the negatives and seldom notice the positives. “Look at all of the people who don’t like me.”
            <br/><br/>
            <b>OVERGENERALIZING</b> You perceive a global pattern of negatives on the basis of a single incident. “This generally happens to me. I seem to fail at a lot of things.”
            <br/><br/>
            <b>DICHOTOMOUS THINKING</b> You view events or people in all-or-nothing terms. “I get rejected by everyone,” or “It was a complete waste of time.”
            <br/><br/>
            <b>SHOULDS</b> You interpret events in terms of how things should be, rather than simply focusing on what is. “I should do well. If I don’t, then I’m a failure.”
            <br/><br/>
            <b>PERSONALIZING</b> You attribute a disproportionate amount of the blame to yourself for negative events, and you fail to see that certain events are also caused by others. “The marriage ended because I failed.”
            <br/><br/>
            <b>BLAMING</b> You focus on the other person as the source of your negative feelings, and you refuse to take responsibility for changing yourself. “She’s to blame for the way I feel now,” or “My parents caused all my problems.”
            <br/><br/>
            <b>UNFAIR COMPARISONS</b> You interpret events in terms of standards that are unrealistic—for example, you focus primarily on others who do better than you and find yourself inferior in the comparison. “She’s more successful than I am,” or “Others did better than I did on the test.”
            <br/><br/>
            <b>REGRET ORIENTATION</b> You focus on the idea that you could have done better in the past, rather than on what you can do better now. “I could have had a better job if I had tried,” or “I shouldn’t have said that.”
            <br/><br/>
            <b>WHAT IF?</b> You keep asking a series of questions about “what if” something happens, and you fail to be satisfied with any of the answers. “Yeah, but what if I get anxious?” or “What if I can’t catch my breath?”
            <br/><br/>
            <b>EMOTIONAL REASONING</b> You let your feelings guide your interpretation of reality. “I feel depressed; therefore, my marriage is not working out.”
            <br/><br/>
            <b>INABILITY TO DISCONFIRM</b> You reject any evidence or arguments that might contradict your negative thoughts. For example, when you have the thought “I’m unlovable,” you reject as irrelevant any evidence that people like you. Consequently, your thought cannot be refuted. “That’s not the real issue. There are deeper problems. There are other factors.”
            <br/><br/>
            <b>JUDGMENT FOCUS</b> You view yourself, others, and events in terms of evaluations as good–bad or superior–inferior, rather than simply describing, accepting, or understanding. You are continually measuring yourself and others according to arbitrary standards, and finding that you and others fall short. You are focused on the judgments of others as well as your own judgments of yourself. “I didn’t perform well in college,” or “If I take up tennis, I won’t do well,” or “Look how successful she is. I’m not successful.”
            <br/><br/>
            <button onClick={submit_func} className="btn">Next</button>
        </div>
    </div>)
}