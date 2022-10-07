import { useHistory } from "react-router-dom";

import NewMeetupform from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    const history = useHistory();

    function onAddMeetupHandler(meetupData) {
        fetch('https://react-34e08-default-rtdb.firebaseio.com/meetups.json',
            {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
                     }
            }
            ).then(()=>{
                history.replace('/');
            });
    }

    return(
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupform onAddMeetup={onAddMeetupHandler}/>
      </section>
    )
}
export default NewMeetupPage;