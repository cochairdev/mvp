import CircleCheckedFilled from '@mui/icons-material/CheckCircle'
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked'

import * as S from './styles'

export const Checkbox = props => (
  <S.StyledCheckbox
    {...props}
    icon={<CircleUnchecked />}
    checkedIcon={<CircleCheckedFilled />}
  />
)
