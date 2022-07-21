import Lottie from "lottie-react";
import anim from "../Animation/ATK.json"
const Header = () => {
    return (<>
    <div class="container cen">
  <div class="row">
    <div class="col">
    <Lottie animationData={anim} loop={true} />
    </div>
    <div class="col center">
        <p class="fs-1">Industrial training weekly test</p>
        <p class="fs-3">Instructions:</p>
        <p  class="fs-6">
          <ul>
            <li>30 Marks</li>
            <li>MCQ Type</li>
            <li>Limited Time</li>
          </ul>
        </p>

      <button type="button" class="btn btn-primary m-2">Open Web-Dev Test</button><br/>
      <button type="button" class="btn btn-primary m-2">Open App-Dev Test</button>
    </div>
    
  </div>
</div>
    
    </>)
}
export default Header