import { Box, Button, Link } from "@chakra-ui/react"
import ModuleInfo from "./module-info.comp"

export default function SimulatorCard({
  iconName,
  title,
  description,
  url,
}: {
  iconName: string
  title: string
  description: string
  url: string
}) {
  return (
    <Box
      className="simulator-card"
      boxShadow="md"
      borderRadius="12px"
      padding="16px"
    >
      <ModuleInfo iconName={iconName} title={title} description={description} />
      <Link href={url} isExternal marginTop="16px" display="block">
        <Button width="full" colorScheme="blue">
          Coba
        </Button>
      </Link>
    </Box>
  )
}
