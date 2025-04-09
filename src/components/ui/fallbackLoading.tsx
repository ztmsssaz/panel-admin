import { colors } from '../../layout/theme/colors';

function FallbackLoading() {
  return (
    <div
      style={{ color: colors.success_500 }}
      className="d-flex align-items-center justify-content-center vh-100"
    >
      <div className="text-center">
        <div
          className="spinner-border"
          role="status"
          style={{ width: '4rem', height: '4rem' }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <p
          className={`mt-3 fs-5 fw-semibold`}
          style={{ color: colors.success_500 }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}

export default FallbackLoading;
