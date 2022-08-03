import { Heading, Box, Text } from "@chakra-ui/react"
import MyIcon from "./my-icon.comp"

export default function ModuleInfo({
  iconName = "question",
  title = "Title",
  description = "Description",
}: {
  iconName: string
  title: string
  description: string
}) {
  return (
    <Box display="flex" gap="16px" alignItems="center">
      <MyIcon faIconName={iconName} />
      <Box className="module-info" overflow="hidden">
        <Heading
          className="module-code"
          textTransform="uppercase"
          fontSize={["18px"]}
          fontWeight="semibold"
        >
          {title}
        </Heading>
        <Text
          className="module-name text-gray-400"
          marginTop="6px"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {description}
        </Text>
      </Box>
    </Box>
  )
}
