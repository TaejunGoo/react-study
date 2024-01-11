const deviceSizes = {
  mobile: "767px",
  pc: "768px"
}

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  pc: `screen and (min-width: ${deviceSizes.pc})`,
};

const theme = {
  device
};

export default theme