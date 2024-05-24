import ProfileCard from "./ProfileCard";
import AlexaImage from "./Images/alexa.png";
import CortanaImage from "./Images/cortana.png";
import SiriImage from "./Images/siri.png";

function App() {
    return (
        <div className="overflow-hidden h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl bg-green-200 w-full p-7">Personal Digital Assistance</h1>
            <div className="flex gap-10 items-center justify-center flex-grow">
                <ProfileCard images={AlexaImage} title="Alexa" handle="@alexa123" description= "Alexa was made by Amazon and helps you buy things." />
                <ProfileCard images={CortanaImage} title="Cortana" handle="@Cortana20" description= "Coratana was made by Microsoft.Who knows what it does?" />
                <ProfileCard images={SiriImage} title="Siri" handle="@siri10" description= "Siri was made by apple and is being phase out" />
            </div>
        </div>
    );
}

export default App;
