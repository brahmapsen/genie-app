import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import EditIcon from '@material-ui/icons/Edit'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist'
import CheckIcon from '@material-ui/icons/Check'
import StepConnector from '@material-ui/core/StepConnector'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const ColorlibConnector = withStyles(theme => ({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line': {
      backgroundImage: theme.customGradients.primary
    }
  },
  completed: {
    '& $line': {
      backgroundImage: theme.customGradients.primary
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
}))(StepConnector)

const useColorlibStepIconStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundImage: theme.customGradients.primary,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage: theme.customGradients.primary
  }
}))

const ColorlibStepIcon = (props) => {
  const classes = useColorlibStepIconStyles()
  const { active, completed } = props

  const icons = {
    1: <EditIcon />,
    2: <LocalFloristIcon />,
    3: <CheckIcon />
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  )
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1),
    borderRadius: 25
  },
  buttonNext: {
    backgroundImage: theme.customGradients.primaryDark,
    color: 'white'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))

const getSteps = () => {
  return ['Fund details', 'Extra', 'Verify']
}

const getStepContent = (step, props) => {
  switch (step) {
    case 0:
      return props.fundDetails
    case 1:
      return props.fundExtra
    case 2:
      return props.fundVerify
    default:
      return 'Unknown step'
  }
}

const CustomStepper = (props) => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const stepperBody =
    <div>
      <Typography className={classes.instructions}>
        {getStepContent(activeStep, props)}
      </Typography>
      <div>
        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
          Back
        </Button>
        <Button
          variant='contained'
          onClick={handleNext}
          className={clsx(classes.button, classes.buttonNext)}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>

  const finished =
    <div>
      <Typography className={classes.instructions}>
        All steps completed - you&apos;re finished
      </Typography>
      <Button onClick={handleReset} className={classes.button}>
        Reset
      </Button>
    </div>

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? finished : stepperBody}
      </div>
    </div>
  )
}

export default CustomStepper
