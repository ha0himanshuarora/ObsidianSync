import React from 'react'
import Workflow from './workflow'
// import { onGetWorkflows } from '../_actions/workflow-connections'
// import MoreCredits from './more-creadits'

type Props = {}

const Workflows=(props:Props)=>{
    return (
        <div className="relative flex flex-col gap-4">
            <section className="flex flex-col m-2">
                <Workflow description='Creating a test workflow' id='4t4huekjbdjuf34tgfu4i' name='Automation Workflow' publish={false}/>
            </section>
        </div>
    )
}
export default Workflows
