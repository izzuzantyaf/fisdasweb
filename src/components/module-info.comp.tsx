import { Heading, Box, Text, BoxProps } from "@chakra-ui/react"
import MyIcon from "./my-icon.comp"

export default function ModuleInfo({
  iconName = "question",
  title = "Title",
  description = "Description",
  ...rest
}: {
  iconName: string
  title: string
  description: string
} & BoxProps) {
  return (
    <Box display="flex" gap="16px" alignItems="center" {...rest}>
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
