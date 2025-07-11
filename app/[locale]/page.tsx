import SectRevBusiness from './sections/SectRevBusiness'
import SectStreamLineWithAI from './sections/SectStreamLineWithAI'
import SectElevateYourBusiness from './sections/SectElevateYourBusiness'
import SectOptimizeBusiness from './sections/SectOptimizeBusiness'
import SectChooseYourPlan from './sections/SectChooseYourPlan'
import SectUnlockFuture from './sections/SectUnlockFuture'

import ChatN8N from './sections/ChatN8N'
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
      <SectUnlockFuture visible={false} />
      <SectChooseYourPlan visible={false} />
      <SectContactClient visible={false} />
      <ChatN8N />
    </div>
  )
}
