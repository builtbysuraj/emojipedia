import {useState} from 'react'
import '../style/EmojiPedia.css'

const emojiDictionary = {
'😀' : 'Grinning Face',
'😃' : 'Grinning Face with Big Eyes',
'😄' : 'Grinning Face with Smiling Eyes',
'😁' : 'Beaming Face with Smiling Eyes',
'😆' : 'Grinning Squinting Face',
'😅' : 'Grinning Face with Sweat',
'🤣' : 'Rolling on the Floor Laughing',
'😂' : 'Face with Tears of Joy',
'🙂' : 'Slightly Smiling Face',
'🙃' : 'Upside-Down Face',
'🫠' : 'Melting Face',
'😉' : 'Winking Face',
'😊' : 'Smiling Face with Smiling Eyes',
'😇' : 'Smiling Face with Halo',
'🥰' : 'Smiling Face with Hearts',
'😍' : 'Smiling Face with Heart-Eyes',
'🤩' : 'Star-Struck',
'😘' : 'Face Blowing a Kiss',
'😗' : 'Kissing Face',
'😚' : 'Kissing Face with Closed Eyes',
'😙' : 'Kissing Face with Smiling Eyes',
'🥲' : 'Smiling Face with Tear',
'😋' : 'Face Savoring Food',
'😛' : 'Face with Tongue',
'😜' : 'Winking Face with Tongue',
'🤪' : 'Zany Face',
'😝' : 'Squinting Face with Tongue',
'🤑' : 'Money-Mouth Face',
'🤗' : 'Smiling Face with Open Hands',
'🤭' : 'Face with Hand Over Mouth',
'🫢' : 'Face with Open Eyes and Hand Over Mouth',
'🫣' : 'Face with Peeking Eye',
'🤫' : 'Shushing Face',
'🤔' : 'Thinking Face',
'🫡' : 'Saluting Face',
'🤐' : 'Zipper-Mouth Face',
'🤨' : 'Face with Raised Eyebrow',
'😐' : 'Neutral Face',
'😑' : 'Expressionless Face',
'😶' : 'Face Without Mouth',
'🫥' : 'Dotted Line Face',
'😶‍🌫️' : 'Face in Clouds',
'😏' : 'Smirking Face',
'😒' : 'Unamused Face',
'🙄' : 'Face with Rolling Eyes',
'😬' : 'Grimacing Face',
'😮‍💨' : 'Face Exhaling',
'🤥' : 'Lying Face',
'😌' : 'Relieved Face',
'😔' : 'Pensive Face',
'😪' : 'Sleepy Face',
'🤤' : 'Drooling Face',
'😴' : 'Sleeping Face',
'😷' : 'Face with Medical Mask',
'🤒' : 'Face with Thermometer',
'🤕' : 'Face with Head-Bandage',
'🤢' : 'Nauseated Face',
'🤮' : 'Face Vomiting',
'🤧' : 'Sneezing Face',
'🥵' : 'Hot Face',
'🥶' : 'Cold Face',
'🥴' : 'Woozy Face',
'😵' : 'Face with Crossed-Out Eyes',
'😵‍💫' : 'Face with Spiral Eyes',
'🤯' : 'Exploding Head',
'🤠' : 'Cowboy Hat Face',
'🥳' : 'Partying Face',
'🥸' : 'Disguised Face',
'😎' : 'Smiling Face with Sunglasses',
'🤓' : 'Nerd Face',
'🧐' : 'Face with Monocle',
'😕' : 'Confused Face',
'🫤' : 'Face with Diagonal Mouth',
'😟' : 'Worried Face',
'🙁' : 'Slightly Frowning Face',
'☹️' : 'Frowning Face',
'😮' : 'Face with Open Mouth',
'😯' : 'Hushed Face',
'😲' : 'Astonished Face',
'😳' : 'Flushed Face',
'🥺' : 'Pleading Face',
'🥹' : 'Face Holding Back Tears',
'😦' : 'Frowning Face with Open Mouth',
'😧' : 'Anguished Face',
'😨' : 'Fearful Face',
'😰' : 'Anxious Face with Sweat',
'😥' : 'Sad but Relieved Face',
'😢' : 'Crying Face',
'😭' : 'Loudly Crying Face',
'😱' : 'Face Screaming in Fear',
'😖' : 'Confounded Face',
'😣' : 'Persevering Face',
'😞' : 'Disappointed Face',
'😓' : 'Downcast Face with Sweat',
'😩' : 'Weary Face',
'😫' : 'Tired Face',
'🥱' : 'Yawning Face',
'😤' : 'Face with Steam From Nose',
'😡' : 'Enraged Face',
'😠' : 'Angry Face',
'🤬' : 'Face with Symbols on Mouth' ,
// eslint-disable-next-line no-dupe-keys
'🫣' : 'Face with Peeking Eye',

}

let emojisWeKnow = (Object.keys(emojiDictionary))

const EmojiPedia = () => {
const [text, setText] = useState("what's your fav emoji")

  const emojiInputHandler = (event) => {
    let useInput = event.target.value

    let meaning = emojiDictionary[useInput]
    
    if(useInput === ''){
      meaning = ''
    }

    if(meaning === undefined) {
      meaning = "we don't know bruh... " 
    }
    setText(meaning)
  }

  const clickEmoji = (emoji) => {
    let meaning = emojiDictionary[emoji]
    setText(meaning)
  }

  return (
    <div className='container'>
      <h1>inside outtttt</h1>

    <input onChange={emojiInputHandler} type="text" placeholder='put an emoji here to know the meaning'/>

    <h2>{text}</h2>
    {
      emojisWeKnow.map((emoji) => {
        return <span 
        onClick={() => clickEmoji(emoji)}
        style={{fontSize: '45px', padding: '1rem',margin:'1rem' , cursor: 'pointer' }} 
        key={emoji}>{emoji}</span>
      })
    }
    </div>
  )
}

export default EmojiPedia

