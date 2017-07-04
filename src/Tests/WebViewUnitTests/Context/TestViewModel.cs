namespace WebViewUnitTests.Context
{
    using OpenMVVM.Core;

    public class TestViewModel : ObservableObject
    {
        private string title;

        private ItemViewModel item;

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

        public ItemViewModel Item
        {
            get
            {
                return this.item;
            }
            set
            {
                this.Set(ref this.item, value);
            }
        }
    }
}