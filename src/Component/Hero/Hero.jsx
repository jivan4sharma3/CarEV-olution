import './Hero.css';
import arrow from '../../assets/arrow_btn.png';
import playIcon from '../../assets/play_icon.png';
import pauseIcon from '../../assets/pause_icon.png';

const Hero = ({playStatus,setPlayStatus,heroCount,herDate,setHeroCount}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{herDate.text1}</p>
            <p>{herDate.text2}</p>
        </div>  
        <div className="hero-explore">
            <p>Explore the features</p>
            <img src={arrow} alt="" />
        </div>   
        <div className="hero-dot-play">
            <ul className="hero-dots">
                <li onClick={()=>{setHeroCount(0)}} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>{setHeroCount(1)}} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>{setHeroCount(2)}} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
            <div className="hero-play">
                <img onClick={()=>{setPlayStatus(!playStatus)}} src={playStatus?pauseIcon:playIcon} alt="" />
                <p>See the video</p>
            </div>
        </div> 
    </div>
  )
}

export default Hero
