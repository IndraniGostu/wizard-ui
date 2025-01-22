import './Style.css'

const Wizard = ({activeStep}) => {

    const FetchWizardUIClass = (step) => {
        if(activeStep === step){
            return ""
        }
        else if (activeStep < step)
        {
            return "wizard-inactive"
        }
        else
        {
            return "wizard-done"
        }
    }

    const FetchWizardTextUIClass = (step) => {
        if(activeStep === step){
            return "wizard-progress-text"
        }
        else if (activeStep < step)
        {
            return "wizard-inactive-text"
        }
        else
        {
            return "wizard-done-text"
        }
    }

    return <div className='wizard-container'>
        <div className='wizard-inner-container'>
            <div style={{position:'relative'}}>
                <div className={`wizard-item ${FetchWizardUIClass(0)}`}>1</div>
                <div className={`wizard-title-text ${FetchWizardTextUIClass(0)}`}>Personal Details</div>
            </div>
            <div className={activeStep ==0? 'wizard-divider ' :' wizard-divider-active'}></div>
            <div style={{position:'relative'}}>
                <div className={`wizard-item ${FetchWizardUIClass(1)}`}>2</div>
                <div className={`wizard-title-text ${FetchWizardTextUIClass(1)}`}>Address Details</div>
            </div>
        </div>
    </div>
}

export default Wizard;