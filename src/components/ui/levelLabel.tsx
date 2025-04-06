import styled from 'styled-components';

const Style = styled.div`
  .wh-6px {
    width: 6px;
    height: 6px;
  }
`;
function LevelLabel({ level = 1 }: { level?: number }) {
  return (
    <Style>
      {level == 1 ? (
        <div className="bg-error-50 text-error-500 fw-semibold rounded-6 d-inline-block px-2 py-1">
          <span className="d-inline-block bg-error-500 rounded-circle wh-6px me-2"></span>
          <span>Urgent</span>
        </div>
      ) : level == 2 ? (
        <div className="bg-info-50 text-info-500 fw-semibold rounded-6 d-inline-block px-2 py-1">
          <span className="d-inline-block bg-info-500 rounded-circle wh-6px me-2"></span>
          <span>Low</span>
        </div>
      ) : (
        <div className="bg-warning-50 text-warning-500 fw-semibold rounded-6 d-inline-block px-2 py-1">
          <span className="d-inline-block bg-warning-500 rounded-circle wh-6px me-2"></span>
          <span>Normal</span>
        </div>
      )}
    </Style>
  );
}

export default LevelLabel;
