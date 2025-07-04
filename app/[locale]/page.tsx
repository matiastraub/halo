import NavBar from './layout/NavBar'
import SectRevBusiness from './sections/SectRevBusiness'
import SectTransform from './sections/SectTransform'
import SectStreamLineWithAI from './sections/SectStreamLineWithAI'
import SectTransformWithPowerAI from './sections/SectTransformWithPowerAI'
import SectElevateYourBusiness from './sections/SectElevateYourBusiness'
import SectOptimizeBusiness from './sections/SectOptimizeBusiness'
import SectChooseYourPlan from './sections/SectChooseYourPlan'
import SectUnlockFuture from './sections/SectUnlockFuture'
import Footer from './layout/Footer'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  return (
    <>
      <div className="frame-root">
        <div className="frame-content">
          <div className="[font-family:var(--font-family-body)]">
            <div>
              <header className="relative z-50 code-section" id="global-header">
                <NavBar />
              </header>
            </div>
            <div>
              <SectRevBusiness />
              <SectStreamLineWithAI />
              <SectTransformWithPowerAI />
              <SectElevateYourBusiness />
              <SectOptimizeBusiness />
              <SectChooseYourPlan />
              <SectUnlockFuture />
              <SectTransform />
              <ChatWidget />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
