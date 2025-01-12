import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import ImageUploader from '../../components/admin/sponsers/sponsersAdmin';
import ManageEventsByAdmin from '../admin/ManageEventsByAdmin';



const NAVIGATION = [
  {
    segment: 'Dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'Culturals',
    title: 'Events',
    icon: <CelebrationIcon color='secondary' />,
    children: [
      {
        segment: 'addEvent',
        title: 'Add Event',
      }
    ],
  },
  {
    segment: 'Images',
    title: 'Images',
    icon: <AcUnitIcon color='secondary' />,
    children: [
      {
        segment: 'sponsers',
        title: 'Sponsers',
      },
      {
        segment: 'gallery',
        title: 'Gallery',
      },
      {
        segment: 'galleryCarousel',
        title: 'Gallery Carousel',
      }
    ],
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    secondary: {
      main: '#f50057',
    },
  },
});

function DemoPageContent({ pathname }) {
  let content = null;

  switch (pathname) {
    case "/Images/sponsers":
      content = <ImageUploader name={"Sponsor"} />;
      break;
    case "/Images/gallery":
      content = <ImageUploader name={"gallery"} />;
      break;
      case "/Images/galleryCarousel":
        content = <ImageUploader name={"galleryCarousel"} />;
        break;
    case "/Culturals/addEvent":
      content=<ManageEventsByAdmin/>;
      break;
    default:
      content = <div>{pathname}</div>;
  }

  return (
    <Box
      sx={{
        py: 4,
        px: 2, // Optional padding on the sides
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'background.default', // Use the theme's background color
        color: 'text.primary', // Use the theme's text color
      }}
    >
      {content}
    </Box>
  );
}



DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};
function ToolbarActionsCalendar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }}>
      <Tooltip title="Event Calendar">
        <IconButton onClick={() => navigate('/event-calendar')}>
          <CalendarMonthIcon />
        </IconButton>
      </Tooltip>
      <ThemeSwitcher />
    </Box>
  );
}
function NavBarLayout(props) {

  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const router = useDemoRouter('/dashboard');
  return (
    <ThemeProvider theme={demoTheme}>
      <AppProvider
        session={session}
        authentication={authentication}
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        branding={{
          logo: <img src="https://mui.com/static/logo.png" alt="Abhiyanth logo" />,
          title: 'ABHIYANTH',
        }}
      >
        <DashboardLayout
          slots={{
            toolbarActions: ToolbarActionsCalendar,
          }}
        >
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}

NavBarLayout.propTypes = {
  window: PropTypes.func,
};

export default NavBarLayout;
