import PropTypes from 'prop-types'
import styled from 'util/style'
import { Box } from '@rebass/grid'

const Container = styled(Box)`
  max-width: ${props => props.maxWidth};
`

Container.propTypes = {
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
}

Container.defaultProps = {
  mx: 'auto',
  maxWidth: '700px',
}

export default Container
