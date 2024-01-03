import React from 'react'
import { GridColumnMenuContainer
    ,GridColumnMenuFilterItem
    , GridColumnMenuHideItem 
} from '@mui/x-data-grid'



const CustomColumnMenu = (props) => {
    const{hideMenu,currentColumn,open}=props
  return (
    <GridColumnMenuContainer
    open={open}
    hideMenu={hideMenu}
    currentColumn={currentColumn}
    >
        <GridColumnMenuFilterItem onClick={hideMenu} column={currentColumn}/>
        < GridColumnMenuHideItem onClick={hideMenu} column={currentColumn}/>
    </GridColumnMenuContainer>
  )
}

export default CustomColumnMenu