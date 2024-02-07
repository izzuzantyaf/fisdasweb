import { Box, Button, Link } from "@chakra-ui/react"
import ModuleInfo from "./module-info.comp"

export default function PracticumMaterialCardWithLinkButton({
  iconName,
  title,
  description,
  url,
  buttonLabel = "Label",
}: {
  iconName: string
  title: string
  description: string
  url: string
  buttonLabel: string
}) {
  return (
    <Box
      className="practicum-material-card"
      boxShadow="md"
      borderRadius="12px"
      padding="16px"
    >
      <ModuleInfo iconName={iconName} title={title} description={description} />
      <Link href={url} isExternal marginTop="16px" display="block">
        <Button width="full" colorScheme="blue">
          {buttonLabel}
        </Button>
      </Link>
    </Box>
  )
}
