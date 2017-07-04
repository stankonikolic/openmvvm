namespace WebViewUnitTests.Context
{
    using OpenMVVM.Core;

    public class TestViewModelLocator : ViewModelLocatorBase
    {
        public TestViewModelLocator()
        {
            IocInstanceFactory.DefaultWeb.Reset();

            var ioc = IocInstanceFactory.DefaultWeb;
            
            ioc.RegisterType<TestViewModel>();
        }

        public TestViewModel TestViewModel
        {
            get
            {
                return IocInstanceFactory.Default.GetInstance<TestViewModel>();
            }
        }
    }
}