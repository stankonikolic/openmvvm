namespace WebViewUnitTests.Context
{
    using OpenMVVM.Core;

    public class ItemViewModel : ObservableObject
    {
        private string title;

        public string Title
        {
            get
            {
                return this.title;
            }
            set
            {
                this.Set(ref this.title, value);
            }
        }
    }
}