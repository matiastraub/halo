import SectRevBusiness from './sections/SectRevBusiness'
import SectStreamLineWithAI from './sections/SectStreamLineWithAI'
import SectElevateYourBusiness from './sections/SectElevateYourBusiness'
import SectOptimizeBusiness from './sections/SectOptimizeBusiness'
import SectChooseYourPlan from './sections/SectChooseYourPlan'
import SectUnlockFuture from './sections/SectUnlockFuture'

import ChatWidget from '../components/ChatWidget'
import SectAboutUs from './sections/SectAboutUs'
import SectContactClient from './sections/SectContactClient'

export default function Home() {
  return (
    <div>
      <SectRevBusiness />
      <SectStreamLineWithAI />
      <SectAboutUs />
      <SectElevateYourBusiness />
      <SectOptimizeBusiness />
      <SectUnlockFuture />
      <SectChooseYourPlan />
      <SectContactClient />
      <ChatWidget />
    </div>
  )
}
