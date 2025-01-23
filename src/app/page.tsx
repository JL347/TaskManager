import Link from "next/link";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div>
      <Container maxWidth="md">
        <Box sx={{ height: '100vh' }}>
          <Typography variant="h4" gutterBottom>
            Task Manager
          </Typography>
          <Button>
            <Link href="/tasks">
              Tasks
            </Link>
          </Button>
        </Box>
      </Container>
    </div>
  );
}
