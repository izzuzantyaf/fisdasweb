import { Icon, Box, BoxProps } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MyIcon({
  faIconName,
  width = ["40px", "40px", "48px"],
  fontSize = ["20px", "20px", "24px"],
  ...rest
}: { faIconName: string } & BoxProps) {
  return (
    <Box
      className="bg-blue-200 text-blue-700"
      display="flex"
      flexShrink={0}
      justifyContent="center"
      alignItems="center"
      rounded="full"
      width={width}
      height={width}
      {...rest}
    >
      <Icon fontSize={fontSize}>
        <FontAwesomeIcon icon={faIconName ?? "question"} />
      </Icon>
    </Box>
  )
}
