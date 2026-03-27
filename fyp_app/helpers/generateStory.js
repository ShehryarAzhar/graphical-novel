import axios from 'axios';
const fetchStory = async (text, setStory, navigation, setIsWaiting, prompt = false) => {

        if( text === "Given the story title: Write a Mystery Story" || 
            text === "Given the story title: Write a Horror Story" || 
            text === "Given the story title: Write a Comedy Story" || 
            text === "Given the story title: Write an Adventure Story" ||
            text == "Given the story title: Write a Fantasy Story"
        ){
            text = text.replace(/^Given (the (story )?title: )?/i, '');
        }

        const data = {"prompt":`${text}`}

        setIsWaiting(true);

        const url = prompt ? '/generate_story_prompt' : '/generate_story';

        if(prompt)
            console.log("prompt");
        
        await axios.post(`https://trusty-locust-teaching.ngrok-free.app${url}`, data, {
            headers: {
                'ngrok-skip-browser-warning': '69420'
            }
        })
        .then(async function ({data}) {
            console.log(data);
            // return;
            if(data.success){
                // console.log(data.generated_prompt[0]);
                console.log(`prompt:${text}`);
                let startingPhrases = [text, `given the story title: ${text}`];
                let input = data.story;

                // Convert the input to lowercase for case-insensitive comparison
                let inputLower = input.toLowerCase();
                let result = input;

                for (let phrase of startingPhrases) {
                    if (inputLower.startsWith(phrase.toLowerCase())) {
                        // Remove the starting phrase from the input string
                        result = input.substring(phrase.length).trim();
                        break;  // Exit the loop once the phrase is removed
                    }
                }


                const inputString = result;
                const words = inputString.split(/\s+/);
                const chunks = [];
                const chunkSize = 100;

                for (let i = 0; i < words.length; i += chunkSize) {
                    const chunk = words.slice(i, i + chunkSize).join(' ');
                    const pageNum = chunks.length+1;
                    let img;
                    if(i <= data.imgs_url.length-1){
                        img = data.imgs_url[i]
                    }else{
                        img = data.imgs_url[data.imgs_url.length-1]
                    }
                    chunks.push({
                        pageNum: pageNum,
                        // image:require('../assets/images/grey.jpg'),
                        imagePath:'https://trusty-locust-teaching.ngrok-free.app'+img,
                        story:[
                            {
                                num:1,
                                text: chunk,
                            }
                        ]
                    });
                }

                console.log("chunks");
                console.log(chunks);

                setStory(chunks);
                setTimeout(()=>{
                    navigation.navigate('StoryScreen')
                },1500)
                setIsWaiting(false);
            }else{
                console.log(data.error)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    export default fetchStory