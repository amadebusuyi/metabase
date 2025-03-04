// eslint-disable-next-line no-restricted-imports
import styled from "@emotion/styled";

import { LegendLayout } from "metabase/visualizations/components/legend/LegendLayout";

import { getChartPadding } from "./padding";

type CartesianChartRootProps = {
  isQueryBuilder?: boolean;
};

export const CartesianChartRoot = styled.div<CartesianChartRootProps>`
  padding: ${getChartPadding};
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ isQueryBuilder }) => (isQueryBuilder ? "0" : "0.325rem")};
  overflow: hidden;
`;

export const CartesianChartLegendLayout = styled(LegendLayout)`
  flex: 1 1 auto;
`;
