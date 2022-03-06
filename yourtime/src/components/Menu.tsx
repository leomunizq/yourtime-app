import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useNavigate } from 'react-router-dom'
import AddNewProject from './AddNewProject'
import { useAuth } from '../context/AuthContext'

const ITEM_HEIGHT = 48

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  //navigation for menu//
  const navigate = useNavigate()
  async function handleNewSchedule() {
    navigate('/newschedule')
  }

  async function HandleLogout() {}
  const { logout, currentUser } = useAuth()

  return (
    <div>
      <IconButton
        sx={{ color: '#fff' }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch'
          }
        }}
      >
        <MenuItem onClick={handleNewSchedule}>New To-Do</MenuItem>

        <MenuItem
          onClick={async e => {
            e.preventDefault()
            await logout()
            console.log(JSON.stringify(currentUser, null, 2))
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}
