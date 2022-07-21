import Lottie from "lottie-react";
import anim from "../animations/anim.json"
const Header = () => {
    return (<>
    <div class="container">
  <div class="row">
    <div class="col">
    <Lottie animationData={anim} loop={true} />
    </div>
    <div class="col">
      Column
    </div>
    
  </div>
</div>
    
    </>)
}
export default Header