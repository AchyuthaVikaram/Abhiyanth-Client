import React from 'react'
import Brochure from '../components/sponsers/Broucher'
import GradientBorderComponent from '../components/general/GradientBorderComponet'
import PastSponsers from '../components/sponsers/PastSponsers'
import WhatsAbhiyanth from '../components/sponsers/WhatsAbhiyanth'
import WhatsInAbiyanth from '../components/sponsers/WhatsInAbiyanth'
import PerksAndBenifitsInSponsers from '../components/sponsers/perksAndBenifitsInSponsers'

export default function Sponsers() {
  return (
    <div>
      <WhatsAbhiyanth/>
      <GradientBorderComponent/>
      <div style={{paddingTop:"40px"}}>
      <Brochure />
      </div>
      <WhatsInAbiyanth/>
      <GradientBorderComponent/>
      <PerksAndBenifitsInSponsers/>
      <PastSponsers/>
    </div>
  )
}
